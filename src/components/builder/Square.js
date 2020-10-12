import React from "react";
import "./Square.css";

const Square = ({ row, column }) => {
  const handleDrop = () => {};
  return (
    <div
      className={
        "w-10 h-11 mr-1 hexagon bg-gray-900 flex items-center justify-center"
      }
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
      }}
      onDrop={handleDrop}
    >
      <div className="w-9 h-10  hexagon bg-gray-800"></div>
    </div>
  );
};
export default Square;
