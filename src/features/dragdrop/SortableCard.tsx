import { useSortable } from "@dnd-kit/sortable";


type Task = {
  id: string;
  title: string;
};

type Props = {
  task: Task;
};

const SortableCard = ({ task }: Props) => {
  const {
    attributes,
    listeners,
    setNodeRef,

  } = useSortable({
    id: task.id,
  });



  return (
    <div
      ref={setNodeRef}
      
      {...attributes}
      {...listeners}
    >
      {task.title}
    </div>
  );
};

export default SortableCard;