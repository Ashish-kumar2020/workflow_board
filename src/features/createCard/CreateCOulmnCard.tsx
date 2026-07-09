import { LucideKanban, LucideX } from "lucide-react";
import ColorButton from "../../components/ColorButton";
import { ColorName } from "../../data/ButtonColor.ts";

const CreateCOulmnCard = () => {
  console.log(ColorName);

  return (
    <div className="w-full max-w-md overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl">
      <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-900/60">
        <div className="flex items-center gap-2">
          <div className="p-1.5 text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-md">
            <LucideKanban />
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white text-md">
            Create New Column
          </h3>
        </div>
        <button className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <LucideX />
        </button>
      </div>

      <form>
        <div className="p-5 space-y-5">
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
            Column Title
            <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            className="w-full px-3.5 py-2 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 transition-shadow dark:placeholder:text-slate-500"
            placeholder="e.g. Backlog, Doing, QA Review, Done"
          />
        </div>
        <div className="grid grid-cols-4 gap-2.5">
          {ColorName.map((val) => (
            <ColorButton
              key={val.id}
              colorName={val.id}
              spanColorText={val.colorName}
            />
          ))}
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/60 flex justify-end gap-2.5">
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 rounded-lg transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all shadow-xs cursor-pointer"
          >
            Create Column
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCOulmnCard;
