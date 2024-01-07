// KanbanComponent.tsx
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { columnMockData, taskMockData, ColumnProps, CardProps } from "../../api/types/kabanCard";
import Column from "./column";

const KanbanComponent: React.FC = () => {
  const [currentTasks, setCurrentTasks] = useState<CardProps[]>(taskMockData);

  const moveTask = (id: string, status: string) => {
    const updatedTasks = currentTasks.map((task) => {
      if (task.id === id) {
        return { ...task, stageId: status };
      }
      return task;
    });

    setCurrentTasks(updatedTasks);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        {columnMockData.map((column) => (
          <Column
            id={column.id}
            title={column.title}
            color={column.color}
            tasks={currentTasks.filter((task) => task.stageId === column.id)}
            moveTask={moveTask}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default KanbanComponent;
