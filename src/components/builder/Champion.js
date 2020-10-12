import React, { useContext } from "react";
import boardContext from "../../context/board/boardContext";

import "./Champion.css";

const Champion = ({ champion }) => {
  const { setBoardDroppable } = useContext(boardContext);
  const { championId, cost } = champion;

  return (
    <div
      className={`h-8 w-8 sm:h-16 sm:w-16 border sm:border-2  mr-1 mb-1 object-cover rounded overflow-hidden cost-${cost}`}
      draggable={true}
      onDragStart={(e) => {
        e.dataTransfer.setData("champId", championId);
        e.dataTransfer.setData("source", "championsPicker");
        setBoardDroppable(true);
      }}
      onDragEnd={() => {
        setBoardDroppable(false);
      }}
    >
      <img src={`/img/champions/${championId}.png`} alt={`${championId}`} />
    </div>
  );
};

export default Champion;
