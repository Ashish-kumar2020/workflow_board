import { LucidePlus, X } from "lucide-react";

const SideNavBar = () => {
  return (
    <aside className="w-64 bg-[#1E293B] border border-zinc-700 flex flex-col">
      <div className="p-4 border-b border-slate-150 dark:border-slate-800/80">
        <div className="flex justify-center items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex justify-center items-center font-bold">
            A
          </div>
          <div className="min-w-0">
            <h1 className="font-bold text-sm text-slate-900 dark:text-white flex justify-center items-center">
              Workflow Board
            </h1>
          </div>
        </div>
      </div>

      {/* Workspace */}
      <div className="flex-1 overflow-y-auto p-6 space-y-1">
        <div className="px-[18px] pb-2 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          Workspace
        </div>

        <div className="text-xs h-8 flex justify-between items-center px-3 font-bold text-blue-600 border-0 border-l-[5px] border-l-blue-600 rounded-l-lg cursor-pointer ">
          <span>Workflow Project</span>
          <button className="opacity-0  hover:opacity-100 p-0.5 cursor-pointer transition-all">
            <X size={"14px"} />
          </button>
        </div>

        {/* Create Workspace */}
        <button className="w-full text-left px-3 py-2 mt-3 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800/30 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer">
          <LucidePlus size={"16px"} />
          <span>Create Workspace</span>
        </button>
      </div>

      {/* Keyboard Shortcuts */}
      <footer className="p-4 mt-auto border-t border-slate-150 dark:border-slate-800/85">
        <div className=" p-4 border border-slate-200 border-xl rounded-xl">
          <p className="uppercase text-[10px] text-slate-400 font-bold mb-2.5">
            Keyboard Shortcuts
          </p>
          <div className="space-y-2 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
            <div className="flex justify-between items-center text-[11px] text-slate-400">
              <span>Create task</span>
              <kbd className="bg-slate-200 dark:bg-slate-700 px-1.5 rounded border border-slate-300 dark:border-slate-600 font-mono text-[9px]">
                C
              </kbd>
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-400">
              <span>Create task</span>
              <kbd className="bg-slate-200 dark:bg-slate-700 px-1.5 rounded border border-slate-300 dark:border-slate-600 font-mono text-[9px]">
                /
              </kbd>
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-400">
              <span>Create task</span>
              <kbd className="bg-slate-200 dark:bg-slate-700 px-1.5 rounded border border-slate-300 dark:border-slate-600 font-mono text-[9px]">
                H
              </kbd>
            </div>
          </div>
        </div>
      </footer>

    
    </aside>
  );
};

export default SideNavBar;
