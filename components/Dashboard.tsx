import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface Widget {
  id: string;
  type: string;
  title: string;
  content: any;
}

interface DashboardProps {
  initialWidgets?: Widget[];
}

export default function Dashboard({ initialWidgets = [] }: DashboardProps) {
  const [widgets, setWidgets] = useState<Widget[]>(initialWidgets);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(widgets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setWidgets(items);
  };

  const addWidget = (type: string) => {
    const newWidget: Widget = {
      id: `widget-${Date.now()}`,
      type,
      title: `New ${type} Widget`,
      content: {},
    };
    setWidgets([...widgets, newWidget]);
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="space-x-2">
          <button
            onClick={() => addWidget('progress')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Progress Widget
          </button>
          <button
            onClick={() => addWidget('stats')}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add Stats Widget
          </button>
        </div>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="dashboard">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {widgets.map((widget, index) => (
                <Draggable key={widget.id} draggableId={widget.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
                    >
                      <h3 className="text-lg font-semibold mb-2">{widget.title}</h3>
                      <div className="widget-content">
                        {/* Widget content rendering based on type */}
                        {widget.type === 'progress' && (
                          <div className="progress-bar">
                            {/* Progress visualization */}
                          </div>
                        )}
                        {widget.type === 'stats' && (
                          <div className="stats-grid">
                            {/* Statistics display */}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
} 