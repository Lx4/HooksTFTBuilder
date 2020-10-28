import React, { useContext } from "react";
import { useDrop } from "react-dnd";

import champions from "../../data/champions";

import Champion from "./Champion";
import boardContext from "../../context/board/boardContext";

const Champions = () => {
  const { championsDroppable, clearSquare } = useContext(boardContext);

  // & DROP
  const [, drop] = useDrop({
    accept: ["champion"],
    drop: ({ origin, originRow, originCol }) => {
      if (origin === "square") {
        clearSquare(originRow, originCol);
      }
    },
  });

  return (
    <div ref={drop} className="relative inline-flex sm:max-w-2xl flex-wrap">
      {champions.map((champion) => (
        <Champion key={champion.championId} champion={champion}></Champion>
      ))}
      {championsDroppable && (
        <div className="flex justify-center items-center absolute h-full w-full bg-gray-800 opacity-75 border">
          <svg
            className="w-12 h-12 -mt-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
        // <div className="flex justify-center items-center absolute z-50 top-0 right-0 h-full w-full bg-gray-800 opacity-75 border">
        //   <div className="text-white">Drop Here</div>
        // </div>
      )}
    </div>
  );
};

export default Champions;
