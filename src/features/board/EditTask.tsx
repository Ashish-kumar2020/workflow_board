import { LucideCalendar, LucideFile, X } from "lucide-react";
import type { CreateTaskInterface } from "../boardtypes/board.types";
import React, { useState } from "react";

type NewtaskProps = {
  onClose: () => void;
  // onCreate: (task: CreateTaskInterface) => void;
  taskTitle:string;
  description:string;
  dueDate:string;
  taskPriority:string;
  tagLables:string[];
  key?:string;
};

const EditTask = ({ taskTitle ,description,dueDate,taskPriority,tagLables,key,onClose}: NewtaskProps) => {
  const [createTask, setCreateTask] = useState<CreateTaskInterface>({
  id: key ?? "",
  taskTitle,
  description,
  targetColumn: "backlog",
  dueDate,
  taskPriority,
  tagLables,
});

  const [tagInput, setTagInput] = useState("");

  const handleUpdateTask = () => {
   
    const getTaskItems = JSON.parse(localStorage.getItem("taskList") ?? "[]");

    const updatedTasks = [
      ...getTaskItems,
      {
        ...createTask,
        id: crypto.randomUUID(),
        tagLables: tagInput
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      },
    ];

    localStorage.setItem("taskList", JSON.stringify(updatedTasks));

    onClose();
  };

  const handleCloseModal = () => {
    onClose();
    setCreateTask({
      id: "",
      taskTitle: "",
      description: "",
      targetColumn: "",
      dueDate: "",
      taskPriority: "backlog",
      tagLables: [],
    });
    setTagInput("");
  };

  return (
    <div className="fixed z-50 inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center px-4 py-8 overflow-y-auto">
      <div className="bg-slate-900 p-6 rounded-xl w-[600px] border border-slate-800">
        <div className="flex justify-between">
          <div className="w-[180px] flex justify-around">
            <LucideFile />
            <span className="font-bold">Edit Task Details</span>
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
                id="tasktitle"
              >
                Task Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3.5 py-2 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/35 focus:border-indigo-500 transition-shadow dark:placeholder:text-slate-500"
                placeholder="e.g. Set up OAuth redirects, fix overflow bug"
                value={createTask.taskTitle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCreateTask((prev) => ({
                    ...prev,
                    taskTitle: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label
                id="description"
                htmlFor="description"
                className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
              >
                Description <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={3}
                className="w-full px-3.5 py-2 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/35 focus:border-indigo-500 transition-shadow resize-none dark:placeholder:text-slate-500"
                placeholder="Elaborate on the task objectives, notes, steps or definitions of done..."
                value={createTask.description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setCreateTask((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
            </div>
            <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label
                  id="duedate"
                  htmlFor="duedate"
                  className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1"
                >
                  <LucideCalendar size={14} /> Due Date{" "}
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full px-3.5 py-2 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 transition-shadow"
                  value={createTask.dueDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCreateTask((prev) => ({
                      ...prev,
                      dueDate: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                id="taskpriority"
                htmlFor="taskpriority"
                className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
              >
                Task Priority <span className="text-rose-500">*</span>
              </label>
              <select
                className="w-full px-3.5 py-2 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 transition-shadow"
                value={createTask.taskPriority}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCreateTask((prev) => ({
                    ...prev,
                    taskPriority: e.target.value,
                  }))
                }
              >
                <option value="selectthepriority">Select the Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

           
          </div>
        </form>
        <hr className="border-slate-800 mt-5" />

        <div className="px-6 py-5 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/60 flex justify-end gap-3">
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 rounded-lg transition-colors cursor-pointer"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-xs font-medium text-white bg-indigo-650 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all shadow-xs cursor-pointer"
            onClick={handleUpdateTask}
          >
            Update Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;