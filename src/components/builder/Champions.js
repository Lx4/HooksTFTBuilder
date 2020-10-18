import React, { useContext } from "react";
import champions from "../../data/champions";

import Champion from "./Champion";
import boardContext from "../../context/board/boardContext";

const Champions = () => {
  const { championsDroppable } = useContext(boardContext);
  return (
    <div className="relative inline-flex sm:max-w-2xl flex-wrap">
      {champions.map((champion) => (
        <Champion key={champion.championId} champion={champion}></Champion>
      ))}
      {championsDroppable && (
        <div className="flex justify-center items-center absolute z-50 top-0 right-0 h-full w-full bg-gray-800 opacity-75 border">
          <div className="text-white">Drop Here</div>
        </div>
      )}
    </div>
  );
};

export default Champions;
