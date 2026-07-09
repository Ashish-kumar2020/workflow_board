import { LucideKanban, LucideX } from "lucide-react";
import ColorButton from "../../components/ColorButton";
import { ColorName } from "../../data/ButtonColor";

type CreateColumnProps = {
   onClose: () => void;
}

const CreateColumnCard = ({onClose}: CreateColumnProps) => {
  return (
    <div className="w-[400px] max-w-[95vw] min-h-[400px] flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/70">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            <LucideKanban size={20} />
          </div>

          <h3 className="font-semibold text-slate-900 dark:text-white text-md">
            Create New Column
          </h3>
        </div>

        <button
          type="button"
          className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          onClick={onClose}
        >
          <LucideX size={16} />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 p-6 space-y-8">
        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
            Column Title <span className="text-rose-500">*</span>
          </label>

          <input
            type="text"
            placeholder="e.g. Backlog, Doing, QA Review, Done"
            className="w-full px-3.5 py-2 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 transition-shadow dark:placeholder:text-slate-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2.5">
            Column Color Accent
          </label>

          <div className="grid grid-cols-4 gap-2.5">
            {ColorName.map((val) => (
              <ColorButton
                key={val.id}
                colorName={val.id}
                spanColorText={val.colorName}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-3 px-6 py-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
        <button
          type="button"
          className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 rounded-lg transition-colors cursor-pointer"
          onClick={onClose}
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
    </div>
  );
};

export default CreateColumnCard;
