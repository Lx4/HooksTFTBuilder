import React, { useContext, useEffect } from "react";
import { useDrag } from "react-dnd";
import boardContext from "../../context/board/boardContext";

import "./Champion.css";

const Champion = ({ champion }) => {
  const { setBoardDroppable, addToBoard } = useContext(boardContext);
  const { championId, cost } = champion;

  const [{ isDragging }, drag] = useDrag({
    item: { type: "champion", champion },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  useEffect(() => {
    setBoardDroppable(isDragging);
  }, [isDragging]);

  return (
    <div
      ref={drag}
      className={`h-8 w-8 sm:h-16 sm:w-16 border sm:border-2  sm:mr-1 sm:mb-1 object-cover rounded overflow-hidden cost-${cost}`}
      // onDragStart={(e) => {
      //   e.dataTransfer.setData("champId", championId);
      //   e.dataTransfer.setData("source", "championsPicker");
      //   setBoardDroppable(true);
      // }}
      // onTouchStart={(e) => {
      //   setBoardDroppable(true);
      // }}
      // onTouchEnd={() => {
      //   setBoardDroppable(false);
      // }}
      onClick={() => addToBoard(championId)}
      // onDragEnd={() => {
      //   setBoardDroppable(false);
      // }}
    >
      <img
        src={`${process.env.REACT_APP_URL_IMG}/img/champions/${championId}.png`}
        alt={`${championId}`}
      />
    </div>
  );
};

export default Champion;
