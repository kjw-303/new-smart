import React from "react";
import { useMenu } from "../context/MenuContext";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const MenuSettings = () => {
  const { menus, setMenus } = useMenu();
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(menus);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setMenus(reordered);
  };

  return (
    <div className="settingsContainer">
      <h2>메뉴 순서 설정</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="menuSettings">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="settingsList"
            >
              {menus.map((item, idx) => (
                <Draggable key={item.id} draggableId={item.id} index={idx}>
                  {(providedDraggable) => (
                    <div
                      className="settingsItem"
                      ref={providedDraggable.innerRef}
                      {...providedDraggable.draggableProps}
                      {...providedDraggable.dragHandleProps}
                    >
                      <span className="dragHandle">≡</span>
                      <span className="itemIcon">{item.icon}</span>
                      <span className="itemLabel">{item.label}</span>
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
};

export default MenuSettings;
