import React, { useContext, useState, useEffect } from "react";
import { useDrop, useDrag } from "react-dnd";

import "./Square.css";
import "./Champion.css";
import boardContext from "../../context/board/boardContext";

const Square = ({ row, column }) => {
  const {
    boardDroppable,
    board,
    addChampion,
    swapSquares,
    setDroppable,
  } = useContext(boardContext);
  const [bg, setBg] = useState("bg-gray-800");
  const champion = board[row][column];

  // DRAG
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: "champion",
      origin: "square",
      originRow: row,
      originCol: column,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // & DROP
  const [, drop] = useDrop({
    accept: ["champion", "item"],
    drop: ({ champion, origin, originRow, originCol, item }) => {
      if (origin === "champions") addChampion(champion, row, column);
      if (origin === "square") {
        swapSquares(originRow, originCol, row, column);
      }
      if (origin === "items") {
        if (champion === null) return;
        // addItemToChampion(champion, row, column); SHOULD UPDATE CHAMPION, insert logic here
      }
    },
  });

  useEffect(() => {
    if (boardDroppable) {
      setBg("bg-gray-700");
    } else setBg("bg-gray-800");
  }, [boardDroppable]);

  useEffect(() => {
    setDroppable("board", isDragging);
    setDroppable("champions", isDragging);
    // eslint-disable-next-line
  }, [isDragging]);

  return (
    <div ref={champion && drag}>
      <div
        ref={drop}
        className={`w-11 h-12 sm:w-20 sm:h-22 mr-1 hexagon  flex items-center justify-center ${
          champion ? "cost-" + champion.cost : "bg-gray-900"
        } `}
      >
        <div className={`w-10 h-11 sm:w-18 sm:h-20 hexagon ${bg} object-cover`}>
          {champion && (
            <img
              className="h-full w-full"
              src={`${process.env.REACT_APP_URL_IMG}/img/champions/${champion.championId}.png`}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Square;
