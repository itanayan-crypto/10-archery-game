import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "./ArcheryGame.css";

// ---- Game constants (1 three.js unit = 1 metre) ----
const SHOTS = 5;
const DISTS = [15, 25, 40];
const RING = 0.061, FACE_R = RING * 10; // 122 cm target face, 10 scoring rings
const G = 9.81, V_MAX = 78, WIND_K = 0.5; // gravity, full-draw arrow speed (m/s), wind push per m/s
const EYE = new THREE.Vector3(0, 1.65, 0), ORIGIN = new THREE.Vector3(0.05, 1.57, -0.5), TC = 1.35; // eye, arrow release point, target centre height
const ARROW_L = 0.8;
const FACE = ["#f4f1e8", "#f4f1e8", "#1c1c1c", "#1c1c1c", "#2f7bd6", "#2f7bd6", "#d63a3a", "#d63a3a", "#ffd23f", "#ffd23f"];

const newWind = () => ({ dir: Math.random() < 0.5 ? -1 : 1, speed: Math.round(Math.random() * 6) });
const label = (p) => (p === 10 ? "Bullseye!" : p >= 8 ? "Great shot" : p >= 5 ? "Good hit" : p >= 1 ? "Just on target" : "Missed the target");
const rating = (t) => (t >= 45 ? "Legend" : t >= 35 ? "Sharpshooter" : t >= 20 ? "Archer" : "Rookie");
const pointsAt = (d) => (d >= FACE_R ? 0 : 10 - Math.floor(d / RING));

// ---- small helpers ----
const canvasTex = (w, h, draw) => {
  const c = document.createElement("canvas"); c.width = w; c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c); t.encoding = THREE.sRGBEncoding; return t;
};
const skyTex = () => canvasTex(8, 512, (g, w, h) => {
  const gr = g.createLinearGradient(0, 0, 0, h);
  [[0, "#2f6fb8"], [0.3, "#6fb0e6"], [0.46, "#ffd9a8"], [0.5, "#ffcf94"], [1, "#8a6a50"]].forEach(([o, c]) => gr.addColorStop(o, c));
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
});
const grassTex = () => {
  const t = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = "#4d8a3c"; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) {
      g.fillStyle = `hsl(${88 + Math.random() * 30},${40 + Math.random() * 25}%,${22 + Math.random() * 20}%)`;
      g.fillRect(Math.random() * w, Math.random() * h, 2, 3 + Math.random() * 4);
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(90, 90); t.anisotropy = 4; return t;
};
const faceTex = () => canvasTex(512, 512, (g, w) => {
  const c = w / 2;
  for (let i = 0; i < 10; i++) {
    g.beginPath(); g.arc(c, c, c * (1 - i / 10), 0, Math.PI * 2);
    g.fillStyle = FACE[i]; g.fill();
    g.lineWidth = 2; g.strokeStyle = FACE[i] === "#1c1c1c" ? "#ddd" : "#222"; g.stroke();
  }
  g.strokeStyle = "#222"; g.lineWidth = 2; g.beginPath(); g.moveTo(c - 8, c); g.lineTo(c + 8, c); g.moveTo(c, c - 8); g.lineTo(c, c + 8); g.stroke();
});
const sunTex = () => canvasTex(128, 128, (g) => {
  const r = g.createRadialGradient(64, 64, 2, 64, 64, 64);
  r.addColorStop(0, "rgba(255,255,230,1)"); r.addColorStop(0.25, "rgba(255,220,150,.8)"); r.addColorStop(1, "rgba(255,190,110,0)");
  g.fillStyle = r; g.fillRect(0, 0, 128, 128);
});

// Arrow with the TIP at the origin, shaft running along +Z (so the tip points along -Z)
function makeArrow(scale = 1) {
  const a = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: 0xd9b27a, roughness: 0.6 });
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, ARROW_L, 8).rotateX(Math.PI / 2), wood);
  shaft.position.z = ARROW_L / 2;
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.011, 0.05, 10).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xb9c2cc, metalness: 0.9, roughness: 0.3 }));
  tip.position.z = 0.025;
  a.add(shaft, tip);
  [0, 120, 240].forEach((deg, i) => {
    const f = new THREE.Mesh(new THREE.BoxGeometry(0.002, 0.03, 0.12), new THREE.MeshStandardMaterial({ color: i ? 0xf4f1e8 : 0xe5484d, roughness: 0.8 }));
    f.position.z = ARROW_L - 0.08; f.rotation.z = (deg * Math.PI) / 180;
    f.geometry.translate(0, 0.015, 0); a.add(f);
  });
  a.scale.setScalar(scale);
  a.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return a;
}

// Flight path: y at horizontal distance D for a launch angle (used for the aim-assist drop compensation)
const dropComp = (dy, D, v) => {
  let lo = Math.atan2(dy, D), hi = lo + 0.25;
  const yAt = (th) => D * Math.tan(th) - (G * D * D) / (2 * v * v * Math.cos(th) ** 2);
  for (let i = 0; i < 30; i++) { const m = (lo + hi) / 2; if (yAt(m) < dy) lo = m; else hi = m; }
  return (lo + hi) / 2 - Math.atan2(dy, D);
};

export default function ArcheryGame() {
  const stageRef = useRef(null), hostRef = useRef(null), gaugeEl = useRef(null), breathEl = useRef(null), crossEl = useRef(null);
  const api = useRef({});
  const [dist, setDist] = useState(25);
  const [assist, setAssist] = useState(true);
  const [wind, setWind] = useState(newWind);
  const [arrows, setArrows] = useState([]);
  const [newBest, setNewBest] = useState(false);
  const [best, setBest] = useState(() => { try { return Number(localStorage.getItem("archery-best")) || 0; } catch { return 0; } });

  const left = SHOTS - arrows.length;
  const over = left === 0;
  const total = arrows.reduce((s, a) => s + a.pts, 0);
  const last = arrows[arrows.length - 1];

  // Live values the render loop reads without re-creating the scene
  const live = useRef({});
  live.current = { dist, assist, wind, over, onShot: (pts, dx, dy) => { setArrows((a) => [...a, { pts, dx, dy }]); setWind(newWind()); } };

  useEffect(() => {
    const stage = stageRef.current, host = hostRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xf0d2a8, 110, 480);
    const camera = new THREE.PerspectiveCamera(48, 1, 0.05, 700);
    camera.position.copy(EYE);
    scene.add(camera);

    // ---- world ----
    const sky = new THREE.Mesh(new THREE.SphereGeometry(450, 32, 16), new THREE.MeshBasicMaterial({ map: skyTex(), side: THREE.BackSide, fog: false }));
    scene.add(sky);
    const sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: sunTex(), blending: THREE.AdditiveBlending, fog: false, depthWrite: false }));
    sun.position.set(-170, 55, -380); sun.scale.set(95, 95, 1); scene.add(sun);
    scene.add(new THREE.HemisphereLight(0xcfe6ff, 0x4a6a3a, 0.65));
    const dir = new THREE.DirectionalLight(0xffe2b0, 1.6);
    dir.position.set(-26, 38, 22); dir.castShadow = true;
    dir.shadow.mapSize.set(2048, 2048);
    Object.assign(dir.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 120 });
    scene.add(dir, dir.target);

    const ground = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), new THREE.MeshStandardMaterial({ map: grassTex(), roughness: 1 }));
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
    const lane = new THREE.Mesh(new THREE.PlaneGeometry(5, 120), new THREE.MeshStandardMaterial({ color: 0x6aa84f, roughness: 1, transparent: true, opacity: 0.45 }));
    lane.rotation.x = -Math.PI / 2; lane.position.set(0, 0.01, -50); lane.receiveShadow = true; scene.add(lane);
    const deck = new THREE.Mesh(new THREE.BoxGeometry(4, 0.12, 2.4), new THREE.MeshStandardMaterial({ color: 0x8a5a33, roughness: 0.8 }));
    deck.position.set(0, 0.06, 0.4); deck.receiveShadow = true; scene.add(deck);

    const hill = new THREE.MeshStandardMaterial({ color: 0x3d6b4b, roughness: 1 });
    [[-190, -300, 190, 60], [10, -330, 220, 75], [210, -290, 180, 55]].forEach(([x, z, w, h]) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 12), hill); m.scale.set(w, h, 70); m.position.set(x, -h * 0.2, z); scene.add(m);
    });
    const trunk = new THREE.MeshStandardMaterial({ color: 0x5a3b22, roughness: 1 });
    const leafs = [0x2f6b3a, 0x3a7d44, 0x245c34].map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 1 }));
    for (let i = 0; i < 90; i++) {
      const side = Math.random() < 0.5 ? -1 : 1, x = side * (9 + Math.random() * 70), z = 25 - Math.random() * 190, s = 0.8 + Math.random() * 1.3;
      const t = new THREE.Group();
      const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.2 * s, 0.3 * s, 2 * s, 7), trunk); tr.position.y = s;
      t.add(tr);
      for (let k = 0; k < 3; k++) {
        const c = new THREE.Mesh(new THREE.ConeGeometry((2.1 - k * 0.5) * s, 2.6 * s, 8), leafs[i % 3]); c.position.y = (2.4 + k * 1.3) * s; t.add(c);
      }
      t.position.set(x, 0, z); scene.add(t);
    }

    // Target assembly (moves with the chosen distance)
    const rig = new THREE.Group(); scene.add(rig);
    const wood = new THREE.MeshStandardMaterial({ color: 0x7a5230, roughness: 0.8 });
    const boss = new THREE.Mesh(new THREE.CylinderGeometry(FACE_R + 0.06, FACE_R + 0.06, 0.18, 40).rotateX(Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xc9a24a, roughness: 1 }));
    boss.position.set(0, TC, -0.1); boss.castShadow = boss.receiveShadow = true; rig.add(boss);
    const face = new THREE.Mesh(new THREE.CircleGeometry(FACE_R, 64), new THREE.MeshStandardMaterial({ map: faceTex(), roughness: 0.9 }));
    face.position.set(0, TC, 0); face.receiveShadow = true; rig.add(face);
    const legH = TC + 0.4;
    [[-0.45, -0.1, 0, 0.1], [0.45, -0.1, 0, -0.1], [0, -0.65, 0.35, 0]].forEach(([x, z, rx, rz]) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, legH, 8), wood);
      leg.position.set(x, legH / 2 - 0.05, z); leg.rotation.set(rx, 0, rz); leg.castShadow = true; rig.add(leg);
    });
    const hay = new THREE.MeshStandardMaterial({ color: 0xcfa94e, roughness: 1 });
    for (let r = 0; r < 2; r++) for (let i = -3; i <= 3; i++) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.8, 0.9), hay);
      b.position.set(i * 1.18 + (r ? 0.55 : 0), 0.4 + r * 0.8, -2.2 - r * 0.05); b.castShadow = b.receiveShadow = true; rig.add(b);
    }

    // Wind flags (one by the target, one mid-lane)
    const flags = [];
    const addFlag = (x, z) => {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 4, 8), new THREE.MeshStandardMaterial({ color: 0xeeeeee }));
      pole.position.set(x, 2, z); pole.castShadow = true;
      const grp = new THREE.Group(); grp.position.set(x, 3.7, z);
      const geo = new THREE.PlaneGeometry(1.2, 0.5, 14, 1); geo.translate(0.6, 0, 0);
      const cloth = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xff5a36, side: THREE.DoubleSide }));
      grp.add(cloth); scene.add(pole, grp);
      flags.push({ pole, grp, geo, base: Float32Array.from(geo.attributes.position.array) });
    };
    addFlag(-2.4, 0); addFlag(3.2, 0); // z is set from the distance in placeFlags()
    const flagMid = flags[1], flagTarget = flags[0];

    // ---- first-person bow ----
    const handRoot = new THREE.Group(); camera.add(handRoot); // scaled / rotated about the camera itself
    const hand = new THREE.Group(); hand.position.set(0.1, -0.2, 0); handRoot.add(hand);
    const bowMat = new THREE.MeshStandardMaterial({ color: 0x6b4423, roughness: 0.5 });
    const bowCurve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0.3, 0.12), new THREE.Vector3(0, 0, -0.14), new THREE.Vector3(0, -0.3, 0.12));
    const limbs = new THREE.Mesh(new THREE.TubeGeometry(bowCurve, 24, 0.011, 8), bowMat); hand.add(limbs);
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.12, 10), new THREE.MeshStandardMaterial({ color: 0x1d1a14, roughness: 0.9 }));
    grip.position.set(0, 0, -0.005); hand.add(grip);
    const fist = new THREE.Mesh(new THREE.SphereGeometry(0.04, 14, 10), new THREE.MeshStandardMaterial({ color: 0xc89070, roughness: 0.8 }));
    fist.position.set(0, -0.01, 0.01); hand.add(fist);
    const strGeo = new THREE.BufferGeometry();
    strGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(9), 3));
    const string = new THREE.Line(strGeo, new THREE.LineBasicMaterial({ color: 0xf2f2f2 })); string.frustumCulled = false; hand.add(string);
    const handArrow = makeArrow(0.7); hand.add(handArrow);
    const HAND_L = ARROW_L * 0.7;

    // ---- arrow in flight, trail, stuck arrows, dust ----
    const flyArrow = makeArrow(1); flyArrow.visible = false; scene.add(flyArrow);
    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(120 * 3), 3));
    const trail = new THREE.Line(trailGeo, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.45 })); trail.frustumCulled = false; scene.add(trail);
    const DUST = 28, dPos = new Float32Array(DUST * 3), dVel = new Float32Array(DUST * 3);
    const dustGeo = new THREE.BufferGeometry(); dustGeo.setAttribute("position", new THREE.BufferAttribute(dPos, 3));
    const dustMat = new THREE.PointsMaterial({ color: 0xe8d9a8, size: 0.06, transparent: true, opacity: 0, depthWrite: false });
    const dust = new THREE.Points(dustGeo, dustMat); dust.frustumCulled = false; scene.add(dust);
    let stuck = [], dustLife = 0;

    // ---- game state ----
    const S = { phase: "aim", draw: 0, fatigue: 0, breath: 1, holding: false, t: 0, ptr: { x: 0, y: 0 }, ar: null, timer: 0, trailN: 0 };
    const look = new THREE.Vector3(0, 1.3, -25), camTarget = new THREE.Vector3(), lookTarget = new THREE.Vector3();
    let curDist = 0, fovNow = 48;

    const applyDist = (d) => {
      curDist = d;
      rig.position.set(0, 0, -d);
      dir.target.position.set(0, 0, -d / 2); dir.position.set(-26, 38, 22 - d / 2);
      const m = 14 + d / 2; Object.assign(dir.shadow.camera, { left: -m, right: m, top: m, bottom: -m }); dir.shadow.camera.updateProjectionMatrix();
      look.set(0, TC - 0.1, -d);
      flagTarget.pole.position.z = flagTarget.grp.position.z = -d + 0.6;
      flagMid.pole.position.z = flagMid.grp.position.z = -d / 2;
    };
    const clearArrows = () => { stuck.forEach((a) => scene.remove(a.mesh)); stuck = []; flyArrow.visible = false; trail.visible = false; };
    const reset = () => { clearArrows(); Object.assign(S, { phase: "aim", draw: 0, fatigue: 0, ar: null }); };
    applyDist(live.current.dist);
    api.current = { reset, setDist: (d) => { reset(); applyDist(d); } };

    // Aim ray through the (swaying) crosshair, using the camera's current orientation and zoom
    const aimNdc = new THREE.Vector2();
    const rayThrough = () => {
      camera.updateMatrixWorld();
      return new THREE.Vector3(aimNdc.x, aimNdc.y, 0.5).unproject(camera).sub(camera.position).normalize();
    };

    const release = () => {
      const power = S.draw;
      if (power < 0.15) { S.phase = "aim"; S.draw = 0; S.fatigue = 0; return; }
      const d = rayThrough(), D = curDist;
      const hitPt = camera.position.clone().addScaledVector(d, D / Math.max(0.2, Math.abs(d.z)));
      const o = ORIGIN.clone(); // arrow leaves the bow a little below the eye
      const to = hitPt.clone().sub(o); const Dh = Math.hypot(to.x, to.z);
      const launch = to.clone().normalize();
      if (live.current.assist) {
        const comp = dropComp(to.y, Dh, V_MAX);
        launch.applyAxisAngle(new THREE.Vector3().crossVectors(launch, new THREE.Vector3(0, 1, 0)).normalize(), comp);
      }
      const speed = V_MAX * (0.3 + 0.7 * power);
      const w = live.current.wind;
      S.ar = { pos: o, vel: launch.multiplyScalar(speed), wind: w.dir * w.speed * WIND_K, done: false };
      S.phase = "fly"; S.draw = 0; S.fatigue = 0; S.trailN = 0;
      flyArrow.visible = true; trail.visible = true;
    };

    const stick = (pos, vel, hit) => {
      const m = makeArrow(1), v = vel.clone().normalize();
      m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), v);
      m.position.copy(pos).addScaledVector(v, hit ? 0.12 : 0.2);
      scene.add(m); stuck.push({ mesh: m, q0: m.quaternion.clone(), v, age: 0, hit });
    };
    const puff = (p) => {
      for (let i = 0; i < DUST; i++) {
        dPos.set([p.x, p.y, p.z], i * 3);
        dVel.set([(Math.random() - 0.5) * 1.2, Math.random() * 0.9, Math.random() * 1.1], i * 3);
      }
      dustLife = 0.9; dustMat.opacity = 0.9;
    };

    const finishShot = (pos, vel, hitInfo) => {
      S.ar.done = true; S.phase = "hit"; S.timer = 1.5; flyArrow.visible = false;
      stick(pos, vel, !!hitInfo && hitInfo.pts > 0);
      if (hitInfo) puff(pos);
      live.current.onShot(hitInfo ? hitInfo.pts : 0, hitInfo ? Math.round(hitInfo.dx * 100) : null, hitInfo ? Math.round(hitInfo.dy * 100) : null);
    };

    const stepArrow = (dt) => {
      const a = S.ar; let rem = dt;
      while (rem > 0 && !a.done) {
        const h = Math.min(rem, 1 / 240); rem -= h;
        const prev = a.pos.clone();
        a.vel.y -= G * h; a.vel.x += a.wind * h;
        a.pos.addScaledVector(a.vel, h);
        const pz = -curDist;
        if (prev.z > pz && a.pos.z <= pz) { // crossed the target face
          const k = (prev.z - pz) / (prev.z - a.pos.z);
          const hx = prev.x + (a.pos.x - prev.x) * k, hy = prev.y + (a.pos.y - prev.y) * k;
          const dx = hx, dy = hy - TC, d = Math.hypot(dx, dy);
          if (d < FACE_R + 0.03) { a.pos.set(hx, hy, pz); finishShot(a.pos, a.vel, { pts: pointsAt(d), dx, dy }); return; }
        }
        const inHay = a.pos.z < -curDist - 1.75 && Math.abs(a.pos.x) < 4.3 && a.pos.y < 1.55;
        if (a.pos.y <= 0.02 || inHay) { finishShot(a.pos, a.vel, null); return; }
      }
    };

    // ---- input ----
    const setPtr = (e) => {
      const r = stage.getBoundingClientRect();
      S.ptr.x = Math.max(-0.95, Math.min(0.95, ((e.clientX - r.left) / r.width) * 2 - 1));
      S.ptr.y = Math.max(-0.95, Math.min(0.95, -(((e.clientY - r.top) / r.height) * 2 - 1)));
    };
    const startDraw = () => { if (S.phase === "aim" && !live.current.over) { S.phase = "draw"; S.draw = 0; S.fatigue = 0; } };
    const endDraw = () => { if (S.phase === "draw") release(); };
    const onDown = (e) => { if (e.button > 0 || e.target.closest("button")) return; setPtr(e); startDraw(); stage.setPointerCapture?.(e.pointerId); };
    const onUp = () => endDraw();
    const onKey = (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;
      if (e.code === "Space") { e.preventDefault(); if (!e.repeat && e.type === "keydown") startDraw(); if (e.type === "keyup") endDraw(); }
      if (e.key === "Shift") S.holding = e.type === "keydown";
    };
    stage.addEventListener("pointermove", setPtr); stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointerup", onUp); stage.addEventListener("pointercancel", onUp);
    window.addEventListener("keydown", onKey); window.addEventListener("keyup", onKey);
    api.current.hold = (v) => { S.holding = v; };
    api.current.draw = startDraw; api.current.loose = endDraw;

    // ---- resize ----
    const resize = () => {
      const w = stage.clientWidth || 800, h = stage.clientHeight || 450;
      renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(stage);

    // ---- loop ----
    let raf, last = performance.now();
    const tick = (now) => {
      const dtRaw = Math.min(0.1, (now - last) / 1000); last = now;
      const wd = live.current.wind, windK = Math.min(1, wd.speed / 4);
      S.t += dtRaw;
      const t = S.t;

      // slow motion for the last metres of flight
      let ts = 1;
      if (S.phase === "fly" && S.ar) ts = S.ar.pos.z < -curDist + 5 && S.ar.pos.z > -curDist - 4 ? 0.3 : 1;
      const dt = dtRaw * ts;

      // wind flags
      flags.forEach((f) => {
        f.grp.scale.x = wd.dir; f.grp.rotation.z = -(1 - windK) * 1.25 * wd.dir;
        const p = f.geo.attributes.position;
        for (let i = 0; i < p.count; i++) {
          const x = f.base[i * 3];
          p.array[i * 3 + 2] = Math.sin(x * 6 - t * (3 + wd.speed * 1.4)) * 0.09 * (0.25 + windK) * x;
          p.array[i * 3 + 1] = f.base[i * 3 + 1] + Math.sin(x * 4 - t * 4) * 0.03 * windK * x;
        }
        p.needsUpdate = true;
      });

      // drawing / fatigue / breath
      if (S.phase === "draw") {
        S.draw = Math.min(1, S.draw + dtRaw / 1.1);
        if (S.draw >= 1) S.fatigue = Math.min(1, S.fatigue + dtRaw / 2.6);
      }
      const canHold = S.holding && S.breath > 0 && (S.phase === "aim" || S.phase === "draw");
      S.breath = Math.max(0, Math.min(1, S.breath + (canHold ? -0.38 : 0.22) * dtRaw));
      if (gaugeEl.current) { gaugeEl.current.style.width = `${S.draw * 100}%`; gaugeEl.current.dataset.full = S.draw >= 1 ? "1" : "0"; }
      if (breathEl.current) breathEl.current.style.width = `${S.breath * 100}%`;

      // camera rig
      const aiming = S.phase === "aim" || S.phase === "draw";
      const zoomT = 48 - (48 - 17) * (S.phase === "draw" ? S.draw : 0);
      let fovT = zoomT, rate = 10;
      if (aiming) { camTarget.copy(EYE); lookTarget.copy(look); }
      else if (S.phase === "fly" && S.ar) {
        const v = S.ar.vel.clone().normalize();
        camTarget.copy(S.ar.pos).addScaledVector(v, -2.6).add(new THREE.Vector3(0.35, 0.4, 0));
        lookTarget.copy(S.ar.pos).addScaledVector(v, 6); fovT = 55; rate = 14;
      } else if (S.phase === "hit" && stuck.length) {
        const h = stuck[stuck.length - 1].mesh.position;
        camTarget.set(h.x * 0.5 + 0.5, Math.max(0.6, h.y + 0.2), -curDist + 3); lookTarget.set(h.x, h.y, -curDist); fovT = 40; rate = 4;
      } else { camTarget.copy(EYE); lookTarget.copy(look); fovT = 48; }
      const kp = 1 - Math.exp(-dtRaw * rate);
      camera.position.lerp(camTarget, kp);
      look.lerp(lookTarget, 1 - Math.exp(-dtRaw * (aiming ? 14 : rate)));
      fovNow += (fovT - fovNow) * (1 - Math.exp(-dtRaw * (aiming ? 16 : 6)));
      camera.fov = fovNow; camera.updateProjectionMatrix();
      camera.lookAt(look);

      // crosshair = pointer + hand tremor (grows with fatigue, steadied by holding breath)
      const steady = canHold ? 0.2 : 1;
      const amp = (0.012 + (S.phase === "draw" ? 0.02 + 0.06 * S.fatigue : 0)) * steady;
      const sx = (Math.sin(t * 1.7) * 0.6 + Math.sin(t * 2.9 + 1) * 0.4) * amp;
      const sy = (Math.sin(t * 1.3 + 2) * 0.6 + Math.sin(t * 3.3) * 0.4) * amp * 0.8;
      aimNdc.set(S.ptr.x + sx, S.ptr.y + sy);
      if (crossEl.current) {
        const w = stage.clientWidth, h = stage.clientHeight;
        crossEl.current.style.transform = `translate(${(aimNdc.x * 0.5 + 0.5) * w}px, ${(-aimNdc.y * 0.5 + 0.5) * h}px)`;
        crossEl.current.style.opacity = aiming && !live.current.over ? "1" : "0";
      }

      // hand bow: keeps its on-screen size while zooming and points along the aim ray
      const show = aiming && !live.current.over;
      handRoot.visible = show;
      if (show) {
        const th = Math.tan((fovNow * Math.PI) / 360), th0 = Math.tan((48 * Math.PI) / 360);
        // shrink + pull in the bow as the view zooms so it keeps the same size and place on screen
        const k = th / th0;
        hand.scale.setScalar(0.6 * k); hand.position.set(0.2 * k, -0.26 * k, -0.75);
        const loc = new THREE.Vector3(aimNdc.x * th * camera.aspect, aimNdc.y * th, -1).normalize();
        handRoot.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), loc);
        const nock = 0.14 + S.draw * 0.3; // string nocking point slides back (towards the eye) as the bow is drawn
        const sp = strGeo.attributes.position;
        sp.array.set([0, 0.3, 0.12, 0, 0, nock, 0, -0.3, 0.12]); sp.needsUpdate = true;
        handArrow.position.set(0, -0.005, nock - HAND_L); // arrow tail sits on the string, tip is forward
      }

      // arrow flight
      if (S.phase === "fly" && S.ar && !S.ar.done) {
        stepArrow(dt);
        if (S.ar) {
          flyArrow.position.copy(S.ar.pos);
          flyArrow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), S.ar.vel.clone().normalize());
          const tp = trailGeo.attributes.position;
          if (S.trailN < 120) { tp.array.set([S.ar.pos.x, S.ar.pos.y, S.ar.pos.z], S.trailN * 3); S.trailN++; trailGeo.setDrawRange(0, S.trailN); tp.needsUpdate = true; }
        }
      }
      if (S.phase === "hit") {
        S.timer -= dtRaw;
        if (S.timer <= 0) { S.phase = live.current.over ? "over" : "aim"; trail.visible = false; }
      }
      if (S.phase === "over") { /* wait for restart */ }

      // stuck arrows quiver for a moment after landing
      stuck.forEach((a) => {
        a.age += dtRaw;
        const wob = a.hit ? Math.exp(-a.age * 5) * Math.sin(a.age * 45) * 0.05 : 0;
        a.mesh.quaternion.copy(a.q0).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), wob));
      });
      if (dustLife > 0) {
        dustLife -= dtRaw; dustMat.opacity = Math.max(0, dustLife);
        for (let i = 0; i < DUST; i++) { dVel[i * 3 + 1] -= 3 * dtRaw; for (let k = 0; k < 3; k++) dPos[i * 3 + k] += dVel[i * 3 + k] * dtRaw; }
        dustGeo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf); ro.disconnect();
      stage.removeEventListener("pointermove", setPtr); stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointerup", onUp); stage.removeEventListener("pointercancel", onUp);
      window.removeEventListener("keydown", onKey); window.removeEventListener("keyup", onKey);
      scene.traverse((o) => {
        o.geometry?.dispose();
        [].concat(o.material || []).forEach((m) => { m.map?.dispose(); m.dispose(); });
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => { api.current.setDist?.(dist); }, [dist]);

  // Round over: save best score
  useEffect(() => {
    if (over && total > best) {
      setBest(total); setNewBest(true);
      try { localStorage.setItem("archery-best", String(total)); } catch { /* ignore */ }
    }
  }, [over, total, best]);

  const restart = () => { setArrows([]); setWind(newWind()); setNewBest(false); api.current.reset?.(); };

  let msg = "Move the mouse to aim · hold click or Space to draw · release to shoot";
  if (last) msg = `${label(last.pts)}${last.pts ? ` · +${last.pts}` : ""}`;
  if (over) msg = `Round over! ${total} / ${SHOTS * 10} · ${rating(total)}${newBest ? " · New best score!" : ""}`;

  return (
    <div className="ar">
      <div className="ar-stage" ref={stageRef}>
        <div className="ar-canvas" ref={hostRef} />
        <div className="ar-hud">
          <div className="ar-stat"><small>Score</small><b>{total}</b></div>
          <div className="ar-stat"><small>Arrows left</small><b>{left}</b></div>
          <div className="ar-stat"><small>Best</small><b>{best}</b></div>
          <div className="ar-stat"><small>Wind m/s</small><b>{wind.speed === 0 ? "Calm" : `${wind.dir < 0 ? "←" : "→"} ${wind.speed}`}</b></div>
          <div className="ar-stat"><small>Distance</small><b>{dist} m</b></div>
        </div>
        <div className="ar-cross" ref={crossEl} aria-hidden="true"><i /><i /><i /><i /></div>
        <p className={"ar-msg" + (over ? " is-over" : last && last.pts === 0 ? " is-miss" : "")} aria-live="polite">{msg}</p>
        {last && !over && <div key={arrows.length} className={"ar-pop" + (last.pts === 0 ? " is-miss" : "")}>{last.pts ? `+${last.pts}` : "Miss"}</div>}
        <div className="ar-bars" aria-hidden="true">
          <div className="ar-bar"><span>Draw</span><div><i ref={gaugeEl} /><u /></div></div>
          <div className="ar-bar ar-bar--breath"><span>Breath</span><div><i ref={breathEl} /></div></div>
        </div>
        {over && (
          <div className="ar-end">
            <h3>{rating(total)}</h3>
            <p>{total} / {SHOTS * 10}{newBest ? " · New best!" : ""}</p>
            <div className="ar-log">
              {arrows.map((a, i) => <span key={i} className="ar-slot is-hit" title={a.dx === null ? "Missed" : `${a.dx} cm / ${a.dy} cm from centre`}>{a.pts}</span>)}
            </div>
            <button type="button" className="btn btn--sun" onClick={restart}>Play again</button>
          </div>
        )}
      </div>

      <div className="ar-controls">
        <div className="ar-seg" role="group" aria-label="Shooting distance">
          {DISTS.map((d) => (
            <button key={d} type="button" className={d === dist ? "is-on" : ""} disabled={arrows.length > 0 && !over} onClick={() => { setDist(d); if (over) restart(); }}>{d} m</button>
          ))}
        </div>
        <label className="ar-check"><input type="checkbox" checked={assist} onChange={(e) => setAssist(e.target.checked)} /> Aim assist (auto drop)</label>
        <button type="button" className="btn" onPointerDown={() => api.current.hold?.(true)} onPointerUp={() => api.current.hold?.(false)} onPointerLeave={() => api.current.hold?.(false)}>Hold breath (Shift)</button>
        <button type="button" className="btn btn--mint" onPointerDown={() => api.current.draw?.()} onPointerUp={() => api.current.loose?.()} onPointerLeave={() => api.current.loose?.()} disabled={over}>Draw &amp; release (Space)</button>
        <button type="button" className="btn btn--rose" onClick={restart}>Restart</button>
      </div>
      <p className="ar-tip">Tip: full draw gives the flattest flight but your arm starts to tremble if you hold too long. Watch the flag and aim into the wind. Hold Shift to steady your breath.</p>
    </div>
  );
}
