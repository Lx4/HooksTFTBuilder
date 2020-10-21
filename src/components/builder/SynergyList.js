import React, { useContext } from "react";
import boardContext from "../../context/board/boardContext";
import { getSynergies } from "../../selectors/board";

import Synergy from "./Synergy";

import "./SynergyList.css";

const SynergyList = () => {
  const { board } = useContext(boardContext);

  const synergies = getSynergies(board);
  console.log(synergies);

  if (!synergies.length) {
    return (
      <div className="mt-4 w-full h-16  flex  items-center justify-center rounded-sm border border-gray-700 xl:w-48 xl:ml-12">
        <svg
          className="h-6 xl:h-12 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div>
          <div className="text-gray-500 ml-4">
            Select champions to activate synergies
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-4 h-16 flex overflow-x-auto xl:h-full xl:w-48 xl:flex-col xl:ml-12 ">
        {synergies.map((synergy) => (
          <Synergy key={synergy.key} trait={synergy} />
        ))}
      </div>
    );
  }
};

export default SynergyList;
