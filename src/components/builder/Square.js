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
    clearSquare,
    swapSquares,
    setDroppable,
    updateChampion,
  } = useContext(boardContext);
  const [bg, setBg] = useState("bg-gray-800");
  const [bgBorder, setBgBorder] = useState("bg-gray-900");
  const [hover, setHover] = useState(false);
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
  const [{ isOver }, drop] = useDrop({
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
    hover: (props, monitor) => {
      if (monitor.canDrop() && props.origin !== "items") {
        if (champion) {
          setBgBorder("bg-white");
          setHover(true);
        } else setBg("bg-blue-400");
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    // https://react-dnd.github.io/react-dnd/docs/tutorial#adding-drag-and-drop-interaction
  });

  // const onDoubleClick = () => {
  //   console.log("clicked");
  //   clearSquare(row, column);
  // };

  useEffect(() => {
    if (boardDroppable) {
      setBg("bg-gray-700");
    } else setBg("bg-gray-800");
  }, [boardDroppable, isOver]);

  useEffect(() => {
    setDroppable("board", isDragging);
    setDroppable("champions", isDragging);
    // eslint-disable-next-line
  }, [isDragging]);

  useEffect(() => {
    if (champion) {
      setBgBorder("cost-" + champion.cost);
    } else {
      setBgBorder("bg-gray-900");
      setHover(false);
    }
  }, [champion, isOver]);

  useEffect(() => {
    setHover(false);
  }, [isOver]);

  return (
    <div className="relative" ref={champion && drag}>
      <div
        ref={drop}
        className={`w-11 h-12 sm:w-20 sm:h-22 mr-1 hexagon  flex items-center justify-center ${bgBorder} `}
      >
        <div
          className={`w-10 h-11 sm:w-18 sm:h-20 hexagon ${bg} hover:bg-red-300 object-cover `}
        >
          {champion && (
            <img
              className={`h-full w-full ${hover && "blur-me"}`}
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
