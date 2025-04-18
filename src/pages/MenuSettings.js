import React, { useState } from "react";
import { useMenu } from "../context/MenuContext";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useNavigate } from "react-router-dom";

const MenuSettings = () => {
  const { menus, setMenus } = useMenu();
  const [tempMenus, setTempMenus] = useState(menus);
  const navigate = useNavigate();

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(menus);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setTempMenus(reordered);
  };

  const handleSave = () => {
    setMenus(tempMenus);
    navigate("/main");
  };

  const handleCancel = () => {
    navigate("/menu");
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
              {tempMenus.map((item, idx) => (
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
      <div className="settingsActions">
        <button className="btn cancleBtn" onClick={handleCancel}>
          취소
        </button>
        <button className="btn saveBtn" onClick={handleSave}>
          저장
        </button>
      </div>
    </div>
  );
};

export default MenuSettings;
