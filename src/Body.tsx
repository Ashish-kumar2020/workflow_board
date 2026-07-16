import { useState, useEffect } from "react";
import BoardDescription from "./features/board/BoardDescription";
import Header from "./features/board/Header";
import PriorityBorad from "./features/board/PriorityBorad";
import SideNavBar from "./features/board/SideNavBar";
import DragDropMain from "./features/dragdrop/DragDropMain";
import HelpPage from "./features/pages/HelpPage";
import { useKeyPressEvent } from "react-use";
import type { CreateTaskInterface } from "./features/boardtypes/board.types";

const Body = () => {
  const [showHelpPage, setShowHelpPage] = useState(false);
  useKeyPressEvent("h", () => setShowHelpPage((prev) => !prev));

  const handleCloseHelpPage = () => {
    setShowHelpPage(false);
  };

  const [tasks, setTasks] = useState<CreateTaskInterface[]>(() => {
    try {
      const taskList = localStorage.getItem("taskList");
      return taskList ? JSON.parse(taskList) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("taskList", JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save taskList to localStorage", error);
    }
  }, [tasks]);

  const addTask = (task: CreateTaskInterface) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <div className="flex bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-200 font-sans select-none">
      <SideNavBar />
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        <Header onCreateTask={addTask} />
        <PriorityBorad />
        {showHelpPage && <HelpPage onClose={handleCloseHelpPage} />}
        <BoardDescription />
        <DragDropMain tasks={tasks} setTasks={setTasks} onCreateTask={addTask}/>
      </div>
    </div>
  );
};

export default Body;