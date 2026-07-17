import { useState, useEffect } from "react";
import BoardDescription from "./features/board/BoardDescription";
import Header from "./features/board/Header";
import PriorityBorad from "./features/board/PriorityBorad";
import SideNavBar from "./features/board/SideNavBar";
import DragDropMain from "./features/dragdrop/DragDropMain";
import HelpPage from "./features/pages/HelpPage";
import { useKeyPressEvent } from "react-use";
import type { CreateTaskInterface } from "./features/boardtypes/board.types";
import AlertPage from "./features/pages/AlertPage";

const Body = () => {
  const [showHelpPage, setShowHelpPage] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

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
  useEffect(() => {
    if (!showAlert) return;

    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showAlert]);

  const addTask = (task: CreateTaskInterface) => {
    setTasks((prev) => [...prev, task]);
  };

  const tagsData = [...new Set(tasks.flatMap((task) => task.tagLables || []))];

  return (
    <div className="flex bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-200 font-sans select-none">
      <SideNavBar />
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        <Header onCreateTask={addTask} />
        {showAlert && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
            <AlertPage setShowAlert={setShowAlert}/>
          </div>
        )}
        <PriorityBorad
          setTasks={setTasks}
          tagsData={tagsData}
          setShowAlert={setShowAlert}
        />
        {showHelpPage && <HelpPage onClose={handleCloseHelpPage} />}
        <BoardDescription tasks={tasks} />
        <DragDropMain
          tasks={tasks}
          setTasks={setTasks}
          onCreateTask={addTask}
        />
      </div>
    </div>
  );
};

export default Body;
