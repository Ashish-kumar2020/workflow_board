import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Cards from "./Cards";
import type { CreateTaskInterface } from "../boardtypes/board.types";

type Props = {
  task: CreateTaskInterface;
  dotColor: string;
  cardName: string;
  tags: string[];
};

const SortableCard = ({ task, dotColor, cardName, tags }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Cards
        taskTitle={task.taskTitle}
        description={task.description}
        targetColumn={task.targetColumn}
        dueDate={task.dueDate}
        taskPriority={task.taskPriority}
        tagLables={task.tagLables}
        dotColor={dotColor}
        cardName={cardName}
        tags={tags}
        key={task.key}
      />
    </div>
  );
};

export default SortableCard;