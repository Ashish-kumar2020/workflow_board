import { useState } from "react";
import {
  LucideArrowRight,
  LucideEllipsisVertical,
  LucidePen,
  LucidePlus,
  LucideTrash2,
} from "lucide-react";

import type { CreateTaskInterface } from "../boardtypes/board.types";
import Cards from "./Cards";

type Props = {
  task: CreateTaskInterface[];
  dotColor: string;
  cardName: string;
  tags: string[];
};

const CommonCard = ({ task, dotColor, cardName, tags }: Props) => {
  const [isEditOption, setIsEditOption] = useState(false);

  const handleEditOption = () => {
    setIsEditOption((prev) => !prev);
  };

  return (
    <div className="w-82 shrink-0 rounded-3xl border-2 border-slate-800 bg-slate-900 p-6 flex flex-col">
      {/* Column Header */}
      <div className="relative flex items-center justify-between mb-4 pb-2 border-b border-slate-700/30">
        <div className="flex items-center gap-2 max-w-[70%]">
          <span className={`w-2.5 h-2.5 rounded-full ${dotColor}`}></span>

          <h3 className="font-semibold text-slate-100 text-sm truncate">
            {cardName}
          </h3>

          <span className="text-[11px] font-bold bg-slate-800 px-1.5 py-0.5 rounded-md text-slate-400">
            {task.length}
          </span>
        </div>

        <div className="flex items-center gap-0.5">
          <button className="p-1 text-slate-500 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors cursor-pointer">
            <LucidePlus size={13} />
          </button>

          <div className="relative">
            <button
              onClick={handleEditOption}
              className="p-1 text-slate-500 hover:text-slate-200 hover:bg-slate-800 rounded"
            >
              <LucideEllipsisVertical size={13} />
            </button>

            {isEditOption && (
              <div className="absolute right-0 top-7 z-20 w-44 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-1 text-xs">
                <button className="w-full text-left px-3 py-1.5 hover:bg-slate-700 flex items-center gap-2">
                  <LucidePen size={13} />
                  Edit Column
                </button>

                <button className="w-full text-left px-3 py-1.5 hover:bg-slate-700 flex items-center gap-2">
                  <LucideArrowRight size={13} />
                  Move Column Right
                </button>

                <div className="border-t border-slate-700 my-1" />

                <button className="w-full text-left px-3 py-1.5 hover:bg-rose-900/20 text-rose-400 flex items-center gap-2">
                  <LucideTrash2 size={13} />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Task List */}
      <div className="flex flex-col items-center overflow-y-auto">
        {task.length === 0 ? (
          <div className="h-28 flex flex-col items-center justify-center text-center p-4 border border-dashed border-slate-700 rounded-xl bg-slate-900/20">
            <span className="text-[10px] font-medium text-slate-500">
              No Task Here
            </span>

            <button className="mt-1.5 text-[10px] font-bold text-blue-400 hover:underline cursor-pointer">
              Add a task
            </button>
          </div>
        ) : (
          task.map((val) => (
            <Cards
              key={val.key}
              taskTitle={val.taskTitle}
              description={val.description}
              targetColumn={val.targetColumn}
              dueDate={val.dueDate}
              taskPriority={val.taskPriority}
              tagLables={val.tagLables}
              dotColor={dotColor}
              cardName={cardName}
              tags={tags}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CommonCard;
