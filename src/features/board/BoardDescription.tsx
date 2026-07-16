
import type { CreateTaskInterface } from "../boardtypes/board.types";

type BoardDescriptionProps = {
  tasks: CreateTaskInterface[];
};

const BoardDescription = ({ tasks }: BoardDescriptionProps) => {

  const backlogTaskCount = tasks.filter((t) => t.targetColumn === "backlog");

  const inProgressTaskCount = tasks.filter(
    (t) => t.targetColumn === "inprogress",
  );

  const doneTaskCount = tasks.filter((t) => t.targetColumn === "done");
  return (
    <div className="px-6 sm:px-8 py-2.5 bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs shrink-0">
      <div className="text-slate-400 text-[11px]">
        Main product development board for the Apollo SaaS dashboard.
      </div>

      <div className="flex items-center justify-center gap-2.5">
        <span className="gap-1 bg-slate-800 rounded-md font-medium text-[10px] px-2 py-1 cursor-pointer">
          Total: <strong>{tasks.length}</strong>
        </span>
        <span className="gap-1 bg-amber-500/10 text-amber-400 rounded-md font-medium text-[10px] px-2 py-1 cursor-pointer">
          Backlog: <strong>{backlogTaskCount.length}</strong>
        </span>

        <span className="gap-1 bg-rose-500/10 text-rose-400 rounded-md font-medium text-[10px] px-2 py-1 cursor-pointer">
          InProgress: <strong>{inProgressTaskCount.length}</strong>
        </span>
        <span className="gap-1 bg-emerald-500/10 text-emerald-400 rounded-md font-medium text-[10px] px-2 py-1 cursor-pointer">
          Done: <strong>{doneTaskCount.length}</strong>
        </span>
      </div>
    </div>
  );
};

export default BoardDescription;
