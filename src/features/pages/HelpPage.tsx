import { LucideKeyboard, LucideX } from "lucide-react";

type HelpPageProps = {
    onClose : () => void;
}

const HelpPage = ({onClose}: HelpPageProps) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-md overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-900/60">
          <div className="flex items-center gap-2">
            <div className="p-1.5 text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-md">
              <LucideKeyboard />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-md">
              Keyboard Shortcuts
            </h3>
          </div>
          <button className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <LucideX onClick={onClose}/>
          </button>
        </div>
        <div className="p-5 space-y-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Boost your productivity with these global keyboard hotkeys:
          </p>
          <div className="divide-y divide-slate-100 dark:divide-slate-800/40">
            {/* Create New Task */}
            <div className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Create a new task
              </span>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-0.5 text-xs font-semibold text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded shadow-xs font-mono">
                  n
                </kbd>
                <span className="text-xs text-slate-400 px-0.5"> or </span>
                <kbd className="px-2 py-0.5 text-xs font-semibold text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded shadow-xs font-mono">
                  c
                </kbd>
              </div>
            </div>

            {/* Create new board */}
            <div className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Create new board
              </span>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-0.5 text-xs font-semibold text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded shadow-xs font-mono">
                  b
                </kbd>
              </div>
            </div>

            {/* Focus Search Input */}
            <div className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Focus Search Input
              </span>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-0.5 text-xs font-semibold text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded shadow-xs font-mono">
                  /
                </kbd>
                <span className="text-xs text-slate-400 px-0.5"> or </span>
                <kbd className="px-2 py-0.5 text-xs font-semibold text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded shadow-xs font-mono">
                  f
                </kbd>
              </div>
            </div>

            {/* Undo last action (or Ctrl+Z / ⌘Z)*/}
            <div className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Undo last action (or Ctrl+Z / ⌘Z)
              </span>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-0.5 text-xs font-semibold text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded shadow-xs font-mono">
                  z
                </kbd>
              </div>
            </div>

            {/*  Redo last action (or Ctrl+Z / ⌘Z) */}
            <div className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Redo last action (or Ctrl+Z / ⌘Z)
              </span>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-0.5 text-xs font-semibold text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded shadow-xs font-mono">
                  y
                </kbd>
              </div>
            </div>

            {/* Close any open modal or clear search/filters*/}
            <div className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Close any open modal or clear search/filters
              </span>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-0.5 text-xs font-semibold text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded shadow-xs font-mono">
                  Esc
                </kbd>
              </div>
            </div>

            {/*Toggle keyboard shortcuts menu */}
            <div className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Toggle keyboard shortcuts menu
              </span>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-0.5 text-xs font-semibold text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded shadow-xs font-mono">
                  h
                </kbd>
              </div>
            </div>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/60 flex justify-end">
            <button className="px-4 py-1.5 text-xs font-medium text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer" onClick={onClose}>
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
