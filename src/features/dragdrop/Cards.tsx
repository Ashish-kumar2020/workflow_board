import {
  LucideArrowLeft,
  LucideArrowRight,
  LucideCalendar1,
  LucideEllipsisVertical,
  LucidePen,
  LucidePlus,
  LucideTag,
  LucideTrash2,
} from "lucide-react";
import SortableCard from "./SortableCard";
import { useState } from "react";

type Props = {
  dotColor: string;
  cardName: string;
  priority: string;
  title: string;
  description: string;
  tags: string[];
  startDate: string;
  rightArrow?: string;
  leftArrow?: string;
};

const Cards = ({
  dotColor,
  cardName,
  priority,
  title,
  description,
  tags,
  startDate,
  rightArrow,
  leftArrow,
}: Props) => {
  const [isEditOption, setIsEditOption] = useState(false);
  const handleEditOption = () => {
    setIsEditOption((prev) => !prev);
  };

  return (
    <div className="flex gap-4 items-start pb-4">
      <div className="shrink-0 w-72 h-fit flex flex-col rounded-2xl border-2 transition-all p-3.5 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
        <div className="relative flex items-center justify-between mb-4 pb-2 border-b border-slate-200/50 dark:border-slate-700/30">
          <div className="flex items-center gap-2 max-w-[70%]">
            <span className={`w-2.5 h-2.5 rounded-full ${dotColor} dark:${dotColor}`}></span>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm truncate">
              {cardName}
            </h3>
            <span className="text-[11px] font-bold bg-slate-200/60 dark:bg-slate-800 px-1.5 py-0.5 rounded-md text-slate-600 dark:text-slate-400">
              1
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            <button className="p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded transition-colors cursor-pointer">
              <LucidePlus size={13} />
            </button>
            <div className="relative">
              <button onClick={handleEditOption} className="p-1 ...">
                <LucideEllipsisVertical size={13} />
              </button>
            </div>
            {/* <div className="fixed inset-0 z-10"></div> */}
            {isEditOption ? (
              <div className="absolute right-0 top-7 z-20 w-44 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg py-1 text-xs">
                <button className="w-full text-left px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 cursor-pointer">
                  {" "}
                  <LucidePen size={13} /> Edit Column
                </button>
                <button className="w-full text-left px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 cursor-pointer">
                  <LucideArrowRight size={13} /> Move Column Right
                </button>
                <div className="border-t border-slate-100 dark:border-slate-750 my-1"></div>
                <button className="w-full text-left px-3 py-1.5 hover:bg-rose-50 dark:hover:bg-rose-950/20 text-rose-600 dark:text-rose-400 flex items-center gap-1.5 cursor-pointer">
                  <LucideTrash2 size={13} /> Delete
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto max-h-[70vh] min-h-[150px] space-y-3 pr-1 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-350 rounded-xl transition-colors duration-150 p-1 ">
          {/* If Content is not present */}
          {/* <div className="h-28 flex flex-col items-center justify-center text-center p-4 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/20 dark:bg-slate-900/10">
            <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
              No Task Here
            </span>
            <button className="mt-1.5 text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
              Add a task
            </button>
          </div> */}

          {/* If Content is present */}
          <div className="group relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all cursor-grab active:cursor-grabbing select-none">
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold border text-slate-600 bg-slate-50 border-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700/60">
                {priority}
              </span>
              <div className="flex items-center gap-1 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <LucidePen size={13} />
                </button>
                <button className="p-1 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded hover:bg-rose-50 dark:hover:bg-rose-900/30 transition-colors cursor-pointer">
                  <LucideTrash2 size={13} />
                </button>
              </div>
            </div>
            <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 leading-snug mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mb-3 leading-relaxed">
              {description}
            </p>

            {/* Tag Names */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.map((val) => (
                <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/80 px-2 py-0.5 rounded-md">
                  <LucideTag size={13} />
                  {val}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-slate-700/40 text-[11px]">
              <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <LucideCalendar1 size={13} />
                <span>{startDate}</span>
              </div>
              <div className="flex items-center gap-0.5 opacity-60 hover:opacity-100 transition-opacity">
                <button className="p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer">
                  {leftArrow && <LucideArrowLeft size={13} />}
                </button>
                <button className="p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer">
                  {rightArrow && <LucideArrowRight size={13} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

{
  /* {tasks.map((task) => (
  <SortableCard key={task.id} task={task} />
))} */
}
