import React from "react";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider, usePreview } from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch";
// import { usePreview } from "react-dnd-preview";

import Board from "../builder/Board";
import Champions from "../builder/Champions";

import "../builder/Champion.css";

// Linked to usePreview to support multi backend with react dnd
const MyPreview = () => {
  const { display, itemType, item, style } = usePreview();

  let championId, cost;
  if (item) {
    if (item.champion) {
      championId = item.champion.championId;
      cost = item.champion.cost;
      console.log(cost);
      console.log(championId);
    }
  }

  if (!display) {
    return null;
  }
  return (
    <div
      className={`h-8 w-8 sm:h-16 sm:w-16 border sm:border-2  sm:mr-1 sm:mb-1 object-cover rounded overflow-hidden cost-${cost}`}
      style={style}
    >
      <img
        src={`${process.env.REACT_APP_URL_IMG}/img/champions/${championId}.png`}
        alt={`${championId}`}
      />
    </div>
  );
};

const Builder = () => {
  return (
    <DndProvider options={HTML5toTouch}>
      <div className="p-2">
        <h1 className="text-gray-100 font text-xl text-teal-400">
          Lx4 Builder's
        </h1>
        <div className="sm:flex mt-4">
          <Board />
          <div className="">Traits</div>
        </div>
        <div className="mt-8">
          <Champions />
          <div>Items Picker</div>
        </div>
      </div>
      <MyPreview />
    </DndProvider>
  );
};

export default Builder;
