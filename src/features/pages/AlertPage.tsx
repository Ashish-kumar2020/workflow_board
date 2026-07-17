import { LucideInfo, X } from "lucide-react";

type AlertProps = {
    setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertPage = ({setShowAlert}: AlertProps) => {

    const handleCloseAlert = () => {
        setShowAlert(false)
    }

  return (
    <div className="flex w-[420px] min-h-[72px] items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/95 p-4 shadow-2xl">
  
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
        <LucideInfo size={18} />
      </div>

      <div className="flex-1">
        <p className="text-sm font-semibold text-slate-100">
          Task filtering is not implemented yet.
        </p>

        <p className="mt-1 text-[13px] leading-5 text-slate-400">
          This feature will be available in the next version.
        </p>
      </div>

     
      <button className="rounded-md p-1 text-slate-500 transition hover:bg-slate-800 hover:text-slate-200" onClick={handleCloseAlert}
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default AlertPage;
