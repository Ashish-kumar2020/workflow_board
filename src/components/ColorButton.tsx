

type Props = {
   colorName: keyof typeof colorClasses;
    spanColorText: string;
}

const colorClasses = {
  slate: {
    button:
      "border-slate-500 bg-slate-50/15 dark:bg-slate-950/20 text-slate-700 dark:text-slate-400",
    dot: "bg-slate-500 dark:bg-slate-400",
  },
  blue: {
    button:
      "border-blue-500 bg-blue-50/15 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400",
    dot: "bg-blue-500 dark:bg-blue-400",
  },
  amber: {
    button:
      "border-amber-500 bg-amber-50/15 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400",
    dot: "bg-amber-500 dark:bg-amber-400",
  },
  purple: {
    button:
      "border-purple-500 bg-purple-50/15 dark:bg-purple-950/20 text-purple-700 dark:text-purple-400",
    dot: "bg-purple-500 dark:bg-purple-400",
  },
  emerald: {
    button:
      "border-emerald-500 bg-emerald-50/15 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400",
    dot: "bg-emerald-500 dark:bg-emerald-400",
  },
  indigo: {
    button:
      "border-indigo-500 bg-indigo-50/15 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400",
    dot: "bg-indigo-500 dark:bg-indigo-400",
  },
  rose: {
    button:
      "border-rose-500 bg-rose-50/15 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400",
    dot: "bg-rose-500 dark:bg-rose-400",
  },
  teal: {
    button:
      "border-teal-500 bg-teal-50/15 dark:bg-teal-950/20 text-teal-700 dark:text-teal-400",
    dot: "bg-teal-500 dark:bg-teal-400",
  },
} 

const ColorButton = ({colorName,spanColorText}: Props) => {
  return (
    <button type="button"
      className={`flex flex-col items-center gap-1.5 p-2 rounded-lg border text-[10px] font-medium transition-all cursor-pointer ${colorClasses[colorName].button}`}
    >
      <span
        className={`w-4 h-4 rounded-full shadow-xs ${colorClasses[colorName].dot}`}
      ></span>

      <span className="truncate max-w-full text-center">
        {spanColorText}
      </span>
    </button>
  );
}

export default ColorButton