// Column.tsx
import React from "react";
import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";
import { CardProps, ColumnProps } from "../../../api/types/kabanCard";

interface DraggableTaskProps {
  task: CardProps;
}

const DraggableTask: React.FC<DraggableTaskProps> = ({ task }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="flex flex-col border w-96 p-5 h-auto mb-5">
      <h3>
        <b>Nome da vaga:</b> {task.title}
      </h3>
      <h3 className="">
        <b>Descrição:</b> {task.description}
      </h3>
      <h3>
        <b>Fechada:</b> {task.completed}
      </h3>
      <h3>
        <b>Cliente:</b> {task.client}
      </h3>
      <h3>
        <b>Pessoa Responsável:</b> {task.assignedPerson}
      </h3>
      <h3>
        <b>Tipo de Contrato:</b> {task.typeOfContract}
      </h3>
      <h3>
        <b>Recrutador:</b> {task.recruiter}
      </h3>
      <h3>
        <b>Gerente:</b> {task.managerOfClient}
      </h3>
      <h3>
        <b>Status:</b> {task.statusClient}
      </h3>
      <h3>
        <b>Data de Criação:</b> {task.dateOfCreation}
      </h3>
    </div>
  );
};

const Column: React.FC<ColumnProps & { tasks: CardProps[]; moveTask: (id: string, status: string) => void }> = ({ id, title, color, tasks, moveTask }) => {
  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item: { id: string }) => {
      moveTask(item.id, id);
    },
  });

  const columnTasks = tasks.filter((task) => task.stageId === id);

  return (
    <div ref={drop} className={`flex flex-col m-8 border-${color} p-2`}>
      <h2>{title}</h2>
      {columnTasks.map((task) => (
        <DraggableTask key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
