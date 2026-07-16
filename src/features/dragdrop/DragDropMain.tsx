import { useEffect, useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import CreateColumn from "../createCard/CreateColumn";
import CommonCard from "./CommonCard";
import Cards from "./Cards";
import type { CreateTaskInterface } from "../boardtypes/board.types";

const COLUMNS = ["backlog", "inprogress", "done"];



type DragDropMainProps = {
  tasks: CreateTaskInterface[];
  setTasks: React.Dispatch<React.SetStateAction<CreateTaskInterface[]>>;
  onCreateTask: (task: CreateTaskInterface) => void;
};

const DragDropMain = ({tasks,setTasks,onCreateTask}:DragDropMainProps) => {
  const [activeTask, setActiveTask] = useState<CreateTaskInterface | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const findColumn = (id: string) => {
    if (COLUMNS.includes(id)) return id; 
    return tasks.find((t) => t.id === id)?.targetColumn;
  };

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find((t) => t.id === event.active.id);
    setActiveTask(task ?? null);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeColumn = findColumn(String(active.id));
    const overColumn = findColumn(String(over.id));

    if (!activeColumn || !overColumn || activeColumn === overColumn) return;

    setTasks((prev) =>
      prev.map((t) =>
        t.id === active.id ? { ...t, targetColumn: overColumn } : t
      )
    );
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);
    if (!over) return;

    const activeIndex = tasks.findIndex((t) => t.id === active.id);
    const overIndex = tasks.findIndex((t) => t.id === over.id);

    if (activeIndex !== -1 && overIndex !== -1 && activeIndex !== overIndex) {
      setTasks((prev) => arrayMove(prev, activeIndex, overIndex));
    }
  };
   useEffect(() => {
    try {
      localStorage.setItem("taskList", JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save taskList to localStorage", error);
    }
  }, [tasks]);



  const backlogTask = tasks.filter((t) => t.targetColumn === "backlog");
  const inProgressTask = tasks.filter((t) => t.targetColumn === "inprogress");
  const doneTask = tasks.filter((t) => t.targetColumn === "done");



  return (
    <div className="flex-1 overflow-x-auto p-6 bg-[#f8fafc] dark:bg-[#0a0f1d] h-full select-none flex gap-6">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <CommonCard id="backlog" dotColor="bg-blue-400 dark:bg-blue-500" cardName="Backlog" tags={["#qa", "#cicd"]} task={backlogTask} onCreateTask={onCreateTask}/>
        <CommonCard id="inprogress" dotColor="bg-blue-400 dark:bg-blue-500" cardName="InProgress" tags={["#qa", "#cicd"]} task={inProgressTask} onCreateTask={onCreateTask}/>
        <CommonCard id="done" dotColor="bg-blue-400 dark:bg-blue-500" cardName="Done" tags={["#qa", "#cicd"]} task={doneTask} onCreateTask={onCreateTask}/>

        <CreateColumn />

        <DragOverlay>
          {activeTask ? (
            <Cards
              taskTitle={activeTask.taskTitle}
              description={activeTask.description}
              targetColumn={activeTask.targetColumn}
              dueDate={activeTask.dueDate}
              taskPriority={activeTask.taskPriority}
              tagLables={activeTask.tagLables}
              dotColor="bg-blue-400"
              cardName=""
              tags={["#qa", "#cicd"]}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default DragDropMain;