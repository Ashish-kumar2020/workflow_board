import { useState } from "react";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import Cards from "./Cards";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

type Task = {
  id: string;
  title: string;
};

const DragDropMain = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "React" },
    { id: "2", title: "Javascript" },
    { id: "3", title: "Typescript" },
    { id: "4", title: "Frontend System Design" },
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = tasks.findIndex((task) => task.id === active.id);

    const newIndex = tasks.findIndex((task) => task.id === over.id);

    setTasks((tasks) => arrayMove(tasks, oldIndex, newIndex));
  };

  return (
    <div className="flex-1 overflow-x-auto p-6 bg-[#f8fafc] dark:bg-[#0a0f1d] select-none">
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={tasks.map((task) => task.id)}>
          <Cards tasks={tasks} />
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default DragDropMain;
