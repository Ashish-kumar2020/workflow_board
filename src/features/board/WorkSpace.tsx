import { LayoutGrid, X } from "lucide-react";
import { useState } from "react";
import type { CreateWorkspaceInterface } from "../boardtypes/board.types";

type WorkSpaceProps = {
  onClose: () => void;
};
const WorkSpace = ({ onClose }: WorkSpaceProps) => {
  const [createWorkspace, setCreateWorkspace] =
    useState<CreateWorkspaceInterface>({
      boardName: "",
      description: "",
    });

  const handleCreateWorkspace = () => {
    if (
      createWorkspace.boardName.length == 0 ||
      createWorkspace.description.length === 0
    ) {
      alert("All fields are mandatory");
      return;
    }
    console.log("Worksace created");

    const getAllWorkSpaceItems = JSON.parse(
      localStorage.getItem("workspaceItem") ?? "[]",
    );

    const updatedWorkSpaceName = [
      ...getAllWorkSpaceItems,
      {
        id: crypto.randomUUID(),
        ...createWorkspace,
      },
    ];

    localStorage.setItem("workspaceItem", JSON.stringify(updatedWorkSpaceName));

    setCreateWorkspace({
      boardName: "",
      description: "",
    });
    onClose()
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center">
      <div className="bg-slate-900 p-6 rounded-xl w-[500px] border border-slate-800">
        <div className="flex justify-between">
          <div className="w-[180px] flex justify-around">
            <LayoutGrid />
            <span className="font-bold">Create New Board</span>
          </div>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <hr className="border-slate-800 mt-4 w-full" />
        <form>
          <div className="p-4 space-y-2 mb-5">
            <div>
              <label
                htmlFor="boardName"
                className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5"
              >
                Board Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3.5 py-2 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500/35 focus:border-indigo-500 transition-shadow dark:placeholder:text-slate-500"
                placeholder="e.g. 🚀 Apollo Launch, 🏠 Chore List"
                value={createWorkspace.boardName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCreateWorkspace((prev) => ({
                    ...prev,
                    boardName: e.target.value,
                  }))
                }
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="description"
                className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5"
              >
                Description <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={3}
                className="w-full px-3.5 py-2 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500/35 focus:border-indigo-500 transition-shadow resize-none dark:placeholder:text-slate-500"
                placeholder="Write a brief overview of this board's goals and scope..."
                value={createWorkspace.description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setCreateWorkspace((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </form>
        <hr className="border-slate-800 mt-4 w-full" />

        <div className="p-4 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/60 flex justify-end gap-2.5">
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 rounded-lg transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-xs font-medium text-white bg-indigo-650 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all shadow-xs cursor-pointer"
            onClick={handleCreateWorkspace}
          >
            Create Board
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
