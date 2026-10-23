import { useEffect } from "react";
import ArcheryGame from "./components/ArcheryGame/ArcheryGame.jsx";

// body[data-task] is used by styles/base.css for this task's page background.
const TASK_ID = "10";

export default function App() {
  useEffect(() => {
    document.body.dataset.task = TASK_ID;
    return () => { delete document.body.dataset.task; };
  }, []);

  return (
    <main className="page">
      <div className="page-head">
        <span className="task-chip">Task 10</span>
        <h1 className="page-title">Archery Game</h1>
        <p className="page-sub">Time your shot as the crosshair sways across the target. Closer to the bullseye means more points. Watch out for the wind!</p>
      </div>
      <ArcheryGame />
    </main>
  );
}
