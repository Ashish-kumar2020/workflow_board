import {
  LucideCalendar1,
  LucidePen,
  LucideTag,
  LucideTrash2,
} from "lucide-react";
import { useState } from "react";
import EditTask from "../board/EditTask";
// import SortableCard from "./SortableCard";

// import type { CreateTaskInterface } from "../boardtypes/board.types";

type Props = {
  dotColor: string;
  cardName: string;
  tags: string[];
  taskTitle: string;
  description: string;
  targetColumn: string;
  dueDate: string;
  taskPriority: string;
  tagLables: string[];
  key?: string;
};

const Cards = ({
  taskTitle,
  description,
  dueDate,
  taskPriority,
  tagLables,
  key
}: Props) => {
  const [isEditCard, setIsEditCard] = useState(false);
  
  const handleEditCard = () => {
    setIsEditCard((prev) => !prev);
  };

  return (
    <div className="flex gap-4 items-start pb-4">
      <div className="shrink-0 w-72 h-fit flex flex-col rounded-2xl border-2 transition-all p-3.5 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
        <div className="flex-1 overflow-y-auto max-h-[70vh] min-h-[150px] space-y-3 pr-1 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-350 rounded-xl transition-colors duration-150 p-1 ">
          {/* If Content is present */}
          <div className="group relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all cursor-grab active:cursor-grabbing select-none">
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold border text-slate-600 bg-slate-50 border-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700/60">
                {taskPriority}
              </span>
              <div className="flex items-center gap-1 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  onClick={handleEditCard}
                >
                  <LucidePen size={13} />
                </button>
                <button className="p-1 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded hover:bg-rose-50 dark:hover:bg-rose-900/30 transition-colors cursor-pointer">
                  <LucideTrash2 size={13} />
                </button>
              </div>
            </div>
            <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 leading-snug mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {taskTitle}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mb-3 leading-relaxed">
              {description}
            </p>

            {/* Tag Names */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tagLables.map((val, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-0.5 text-[10px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/80 px-2 py-0.5 rounded-md"
                >
                  <LucideTag size={13} />
                  {val}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-slate-700/40 text-[11px]">
              <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <LucideCalendar1 size={13} />
                <span>{dueDate}</span>
              </div>
              <div className="flex items-center gap-0.5 opacity-60 hover:opacity-100 transition-opacity">
                <button className="p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer">
                  {/* {leftArrow && <LucideArrowLeft size={13} />} */}
                </button>
                <button className="p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer">
                  {/* {rightArrow && <LucideArrowRight size={13} />} */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isEditCard && (
        <EditTask
          taskTitle={taskTitle}
          description={description}
          dueDate={dueDate}
          taskPriority={taskPriority}
          tagLables={tagLables}
          key={key}
          onClose={handleEditCard}

        />
      )}
    </div>
  );
};

export default Cards;

{
  /* {tasks.map((task) => (
  <SortableCard key={task.id} task={task} />
))} */
}
