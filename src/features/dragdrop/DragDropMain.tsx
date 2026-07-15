import { useState } from "react";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
// import Cards from "./Cards";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import CreateColumn from "../createCard/CreateColumn";
import CommonCard from "./CommonCard";

type Task = {
  taskTitle: string;
  description: string;
  targetColumn: string;
  dueDate: string;
  taskPriority: string;
  tagLables: string;
  key?: string;
};

const DragDropMain = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const taskList = localStorage.getItem("taskList");
      return taskList ? JSON.parse(taskList) : [];
    } catch (error) {
      console.error("Failed to parse taskList from localStorage", error);
      return [];
    }
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = tasks.findIndex((task) => task.id === active.id);

    const newIndex = tasks.findIndex((task) => task.id === over.id);

    setTasks((tasks) => arrayMove(tasks, oldIndex, newIndex));
  };

  const backlogTask = tasks.filter((task) => task.targetColumn === "backlog");
  const inProgressTask = tasks.filter(
    (task) => task.targetColumn === "inprogress",
  );
  const doneTask = tasks.filter((task) => task.targetColumn === "done");

  return (
    <div className="flex-1 overflow-x-auto p-6 bg-[#f8fafc] dark:bg-[#0a0f1d] h-full select-none flex gap-6">
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={tasks.map((task) => task.key)}>
          
              <CommonCard
                dotColor="bg-blue-400 dark:bg-blue-500"
                cardName="Backlog"
                tags={["#qa", "#cicd"]}
                task={backlogTask}
              />

               <CommonCard
                dotColor="bg-blue-400 dark:bg-blue-500"
                cardName="InProgress"
                tags={["#qa", "#cicd"]}
                task={inProgressTask}
              />

               <CommonCard
                dotColor="bg-blue-400 dark:bg-blue-500"
                cardName="Done"
                tags={["#qa", "#cicd"]}
                task={doneTask}
              />
            

          {/* Inprogress TAsk */}
          {/* {inProgressTask.map((task) => {
            return (
              <Cards
                dotColor="bg-blue-400 dark:bg-blue-500"
                cardName="Backlog"
                priority={task.taskPriority}
                title={task.taskTitle}
                description={task.description}
                tags={["#qa", "#cicd"]}
                startDate={task.dueDate}
                rightArrow="LucideArrowRight"
                leftArrow="LucideArrowLeft"
              />
            );
          })} */}

          <CreateColumn />
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default DragDropMain;
