import React, { useContext, useState, useEffect } from "react";
import "./Square.css";
import boardContext from "../../context/board/boardContext";

const Square = ({ row, column }) => {
  const { droppable } = useContext(boardContext);
  const [bg, setBg] = useState("bg-gray-800");

  useEffect(() => {
    if (droppable) {
      setBg("bg-gray-700");
    } else setBg("bg-gray-800");
  }, [droppable]);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("source", "square");
    e.dataTransfer.setData("sourceRow", row);
    e.dataTransfer.setData("sourceColumn", column);
  };
  const handleDrop = () => {};

  return (
    <div
      className={`w-10 h-11 sm:w-20 sm:h-22 mr-1 hexagon bg-gray-900 flex items-center justify-center `}
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
      }}
      onDrop={handleDrop}
      onDragStart={handleDragStart}
    >
      <div className={`w-9 h-10 sm:w-18 sm:h-20 hexagon ${bg}`}></div>
    </div>
  );
};
export default Square;
