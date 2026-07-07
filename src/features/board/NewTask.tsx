import { LucideCalendar, LucideFile, Tag, X } from "lucide-react";

type NewtaskProps = {
  onClose: () => void;
};

const NewTask = ({ onClose }: NewtaskProps) => {
  return (
   <div className="fixed z-50 inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center px-4 py-8 overflow-y-auto">
      <div className="bg-slate-900 p-6 rounded-xl w-[600px] border border-slate-800">
        <div className="flex justify-between">
          <div className="w-[180px] flex justify-around">
            <LucideFile />
            <span className="font-bold">Create New Task</span>
          </div>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
       <hr className="border-slate-800 mt-5" />
        <form>
         <div className="p-6 space-y-6">
            <div>
              <label
                htmlFor="boardName"
                className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
              >
                Task Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3.5 py-2 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/35 focus:border-indigo-500 transition-shadow dark:placeholder:text-slate-500"
                placeholder="e.g. Set up OAuth redirects, fix overflow bug"
              />
            </div>
            <div >
              <label
                htmlFor="description"
                className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
              >
                Description <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={3}
                className="w-full px-3.5 py-2 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/35 focus:border-indigo-500 transition-shadow resize-none dark:placeholder:text-slate-500"
                placeholder="Elaborate on the task objectives, notes, steps or definitions of done..."
              />
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label
                  htmlFor="targetcolumn"
                  className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
                >
                  Target Column
                </label>
                <select
                  name=""
                  id=""
                  className="w-full px-3.5 py-2 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 transition-shadow"
                >
                  <option value="todo">TODO</option>
                  <option value="inprogress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="duedate"
                  className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1"
                >
                  <LucideCalendar size={14} /> Due Date
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="w-full px-3.5 py-2 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 transition-shadow"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="taskpriority"
                className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
              >
                Task Priority
              </label>

             <div className="grid grid-cols-3 gap-3 mt-3">
                <button
                  type="button"
                  className="py-2 text-xs font-semibold rounded-lg border border-emerald-500 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
                >
                  Low
                </button>

                <button
                  type="button"
                  className="py-2 text-xs font-semibold rounded-lg border border-amber-500 bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-white transition-all cursor-pointer"
                >
                  Medium
                </button>

                <button
                  type="button"
                  className="py-2 text-xs font-semibold rounded-lg border border-rose-500 bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all cursor-pointer"
                >
                  High
                </button>
              </div>
            </div>
           <div>
              <label
                htmlFor="tags"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
              >
                <Tag size={14} />
                Tags / Labels
              </label>

              <input
                id="tags"
                type="text"
                placeholder="e.g. frontend, bug, api (separate with commas)"
                className="w-full px-3.5 py-3 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 transition-shadow placeholder:text-slate-500 dark:placeholder:text-slate-500"
              />
            </div>
          </div>
        </form>
        <hr className="border-slate-800 mt-5" />

       <div className="px-6 py-5 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/60 flex justify-end gap-3">
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 rounded-lg transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-xs font-medium text-white bg-indigo-650 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all shadow-xs cursor-pointer"
          >
            Create Board
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
