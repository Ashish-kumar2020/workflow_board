
export interface CreateTaskInterface {
  id: string;
  taskTitle: string;
  description: string;
  targetColumn: string;
  dueDate: string;
  taskPriority: string;
tagLables: string[];
key?:string;
}



export interface CreateWorkspaceInterface {
  boardName: string;
  description: string;
}