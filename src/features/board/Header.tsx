import { LucideLogOut, Search } from "lucide-react";
import NewTask from "./NewTask";
import { useRef, useState } from "react";
import { useKeyPressEvent } from "react-use";
import type { CreateTaskInterface } from "../boardtypes/board.types";


type HeaderProps = {
  onCreateTask: (task: CreateTaskInterface) => void;
};

const Header = ({onCreateTask}: HeaderProps) => {
  const [createTaskFlag, setCreateTaskFlag] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const createTaskHandler = () => {
    setCreateTaskFlag((prev) => !prev);
  };

  useKeyPressEvent("c", () => {
    if (!createTaskFlag) {
      setCreateTaskFlag(true);
    }
  });

  useKeyPressEvent("/" ,(e)=> {
    e.preventDefault();
    searchInputRef.current?.focus()
  })
  return (
    <header className="h-16 w-full border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <h2 className="text-sm sm:text-md font-bold text-slate-900 dark:text-white truncate">
              Workflow Project
            </h2>

            <span className="px-2 py-0.5 ml-4 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] font-bold tracking-wide rounded uppercase shrink-0">
              Active Sprint
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <div className="relative hidden sm:block w-44 lg:w-64">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            ref={searchInputRef}
            className="w-full pl-9 pr-8 py-1.5 text-xs text-slate-900 dark:text-white bg-slate-100 hover:bg-slate-100/70 dark:bg-slate-800/70 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all placeholder:text-slate-500"
            placeholder="Search tasks... (Press /)"
          />
        </div>

        <div
          title="Live Collabrative board - Under Development"
          className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/5 px-3.5 py-1 rounded-full border border-emerald-500/20 select-none cursor-pointer"
        >
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
          <span>LIVE</span>
        </div>

        <div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-md shadow-blue-600/10 shrink-0 cursor-pointer"
            onClick={createTaskHandler}
          >
            Create Task
          </button>
        </div>

        <button
          title="LogOut"
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <LucideLogOut
            size={18}
            className="text-slate-600 dark:text-slate-300"
          />
        </button>
      </div>
      {createTaskFlag && (
        <NewTask onClose={() => setCreateTaskFlag(false)} onCreate={onCreateTask} />
      )}
    </header>
  );
};

export default Header;
