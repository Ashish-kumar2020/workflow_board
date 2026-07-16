import { LucideBriefcase,  LucideRedo2, LucideRefreshCcw, LucideUndo2, Sun } from "lucide-react";
import type { CreateTaskInterface } from "../boardtypes/board.types";


type PriorityBoardProps = {
  
  setTasks: React.Dispatch<React.SetStateAction<CreateTaskInterface[]>>;

};

const PriorityBorad = ({setTasks}: PriorityBoardProps) => {

  const handleResetData = () => {
    localStorage.removeItem("taskList");
     setTasks([]);
  }
  
  return (
    <div className="h-12 px-6 sm:px-8 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 shrink-0">
      {/* Left Side */}
      <div className="flex items-center gap-4 text-xs overflow-x-auto py-1">
        {/* Priority */}
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 shrink-0">
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            Priority:
          </span>

          <select
            name=""
            id=""
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-2 py-0.5 text-[11px] font-semibold cursor-pointer text-slate-800 dark:text-slate-200 focus:outline-none"
          >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        {/* Labels */}
        <div className="flex items-center justify-around gap-1.5 shrink-0 pl-3 border-l border-slate-200 dark:border-slate-850">
          <span className="font-semibold text-slate-200">Lables:</span>

          <div className="flex items-center gap-1">
            <button className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold cursor-pointer hover:bg-slate-600">
              #api
            </button>

            <button className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold cursor-pointer hover:bg-slate-600">
              #react
            </button>

            <button className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold cursor-pointer hover:bg-slate-600">
              #backend
            </button>

            <button className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold cursor-pointer hover:bg-slate-600">
              #devops
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="border border-slate-700 rounded-lg flex items-center bg-slate-800 p-1 ">
          <button title="Undo Last Action (ctrl+Z)" className="p-1 rounded-md text-slate-400 cursor-pointer hover:text-slate-700">
            <LucideUndo2 size={13} />
          </button>

          <button title="Redo Last Action (ctrl+Y)" className="p-1 rounded-md text-slate-400 cursor-pointer hover:text-slate-700">
            <LucideRedo2 size={13} />
          </button>
        </div>
        <div className="h-4 w-px bg-slate-200"></div>
        {/* Theme toggler */}
        <button title="Toggle Theme" className="p-1.5 hover:bg-slate-800 rounded text-slate-500 cursor-pointer"><Sun size={14}/></button>

        {/* Workspace Setting */}
         <button title="Workspace Setting" className="p-1.5 hover:bg-slate-800 rounded text-slate-500 cursor-pointer"><LucideBriefcase size={14}/></button>

         {/* Reset Data */}
         <button title="Reset Data" className="p-1.5 hover:bg-rose-950/50 rounded hover:text-rose-500 cursor-pointer" onClick={handleResetData}><LucideRefreshCcw size={14}/></button>
      </div>
    </div>
  );
};

export default PriorityBorad;
