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
    <div className="flex-1 overflow-x-auto p-6 bg-[#f8fafc] dark:bg-[#0a0f1d] h-full select-none flex gap-6">
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={tasks.map((task) => task.id)}>
          <Cards
            dotColor="bg-slate-400 dark:bg-slate-500"
            cardName="Backlog"
            priority="low"
            title="Produce API Developer Documentation"
            description="Write API endpoints swagger-style documentation. Create standard request/response payload examples for other teams."
            tags={["#api", "#docs"]}
            startDate="08-July-2026"
            rightArrow="LucideArrowRight"
          />
          <Cards
            dotColor="bg-blue-400 dark:bg-blue-500"
            cardName="Selected For Dev"
            priority="Medium"
            title="COnfigure Jest for testing pipeline"
            description="Write unit test cases for all the components"
            tags={["#qa", "#cicd"]}
            startDate="09-July-2026"
            rightArrow="LucideArrowRight"
            leftArrow="LucideArrowLeft"
          />
          {/* <Cards tasks={tasks} /> */}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default DragDropMain;
