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
      <div className="mt-4 flex items-center justify-center w-full h-16 rounded-sm border border-gray-700 ">
        <svg
          className="h-6 text-gray-400"
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
          <span className="text-gray-500 ml-4">
            Select champions to activate synergies
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-4 h-16 flex overflow-x-auto">
        {synergies.map((synergy) => (
          <Synergy key={synergy.key} trait={synergy} />
        ))}
      </div>
    );
  }
};

export default SynergyList;
