import React, { useContext, useState, useEffect } from "react";
import { useDrop, useDrag } from "react-dnd";

import "./Square.css";
import "./Champion.css";
import boardContext from "../../context/board/boardContext";
import ItemsList from "./ItemsList";

const Square = ({ row, column }) => {
  const {
    boardDroppable,
    board,
    addChampion,
    swapSquares,
    setDroppable,
    updateChampion,
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
      champion,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // & DROP
  const [, drop] = useDrop({
    accept: ["champion", "item"],
    drop: (item) => {
      if (item.origin === "champions") addChampion(item.champion, row, column);
      if (item.origin === "square") {
        swapSquares(item.originRow, item.originCol, row, column);
      }
      if (item.origin === "items") {
        if (champion === null) return;
        else {
          if (champion.items.length < 3) {
            console.log("dropping item on champion");
            champion.items.push(item.item);
            updateChampion(champion, row, column);
          } else {
            console.log("can't add any item, already 3");
          }
        }
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
    <div className="relative" ref={champion && drag}>
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
      {champion && <ItemsList items={champion.items} />}
    </div>
  );
};
export default Square;
