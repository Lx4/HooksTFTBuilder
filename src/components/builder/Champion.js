import React, { useContext, useEffect } from "react";
import { useDrag } from "react-dnd";
import boardContext from "../../context/board/boardContext";

import "./Champion.css";

const Champion = ({ champion }) => {
  const { setDroppable, addToBoard } = useContext(boardContext);
  const { championId, cost } = champion;
  champion.items = [];

  const [{ isDragging }, drag] = useDrag({
    item: { type: "champion", champion, origin: "champions" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  useEffect(() => {
    setDroppable("board", isDragging);
    // eslint-disable-next-line
  }, [isDragging]);

  return (
    <div
      ref={drag}
      className={`h-9 w-9 sm:h-16 sm:w-16 border sm:border-2  sm:mr-1 sm:mb-1 object-cover rounded overflow-hidden cost-${cost}`}
      onClick={() => addToBoard(championId)}
    >
      <img
        src={`${process.env.REACT_APP_URL_IMG}/img/champions/${championId}.png`}
        alt={`${championId}`}
      />
    </div>
  );
};

export default Champion;
