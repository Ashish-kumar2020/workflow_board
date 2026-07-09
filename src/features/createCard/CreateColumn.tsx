import { LucidePlus } from "lucide-react";
import { useState } from "react";
import CreateCOulmnCard from "./CreateCOulmnCard";



const CreateColumn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateColumnModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  
  return (
    <>
      <button
        onClick={handleCreateColumnModal}
        className="shrink-0 w-72 h-36 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-850 hover:border-slate-350 dark:hover:border-slate-700 bg-white/40 dark:bg-slate-900/10 rounded-2xl p-6 transition-all text-center cursor-pointer hover:bg-white dark:hover:bg-slate-900/30 text-slate-500 dark:text-slate-400"
      >
        <LucidePlus />
        <span className="text-xs font-semibold">Create Column</span>
        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 max-w-[160px]">
          Extend your sprint workflow phases
        </p>
      </button>

      {isModalOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div onClick={(e) => e.stopPropagation()}>
            <CreateCOulmnCard onClose={() => setIsModalOpen(false)}/>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateColumn;
