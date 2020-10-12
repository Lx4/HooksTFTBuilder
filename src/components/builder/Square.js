import React, { useContext, useState, useEffect } from "react";
import "./Square.css";
import "./Champion.css";
import boardContext from "../../context/board/boardContext";

const Square = ({ row, column }) => {
  const { droppable, board, handleDropOnSquare } = useContext(boardContext);
  const [bg, setBg] = useState("bg-gray-800");
  const champion = board[row][column];

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

  const handleDrop = (e) => {
    handleDropOnSquare(e, row, column);
  };

  return (
    <div
      className={`w-10 h-11 sm:w-20 sm:h-22 mr-1 hexagon  flex items-center justify-center ${
        champion ? "cost-" + champion.cost : "bg-gray-900"
      } `}
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
      }}
      onDrop={handleDrop}
      onDragStart={handleDragStart}
    >
      <div className={`w-9 h-10 sm:w-18 sm:h-20 hexagon ${bg} object-cover`}>
        {champion && (
          <img
            className="h-full w-full"
            src={`${
              process.env.REACT_APP_URL_IMG
            }/img/champions/${champion.championId}.png`}
            alt=""
          />
        )}
      </div>
    </div>
  );
};
export default Square;
