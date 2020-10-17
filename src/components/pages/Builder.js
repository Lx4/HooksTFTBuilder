import React, { useContext } from "react";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider, usePreview } from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch";
// import { usePreview } from "react-dnd-preview";

import Board from "../builder/Board";
import Champions from "../builder/Champions";
import Items from "../builder/Items";
import Tabs from "../builder/layout/Tabs";

import FiltersContext from "../../context/filters/filtersContext";

import "../builder/Champion.css";

// Linked to usePreview to support multi backend with react dnd
const MyPreview = () => {
  const { display, itemType, item, style } = usePreview();

  let championId, cost;
  if (item) {
    if (item.champion) {
      championId = item.champion.championId;
      cost = item.champion.cost;
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
  const { picker } = useContext(FiltersContext);
  return (
    <DndProvider options={HTML5toTouch}>
      <header className="h-8 bg-gray-900 shadow-lg px-1">
        <h1 className="inline font text-xl text-teal-500">Builder</h1>
        <span className="text-gray-600 pl-1 text-xs">by Lx4</span>
      </header>
      <div className="px-2 ">
        <div className="sm:flex mt-4 ml-2">
          <Board />
          <div className="">Traits</div>
        </div>
        <Tabs />
        <div className="mt-4 container flex flex-col">
          {picker === "champions" && <Champions />}
          {picker === "items" && <Items />}
        </div>
      </div>
      <MyPreview />
    </DndProvider>
  );
};

export default Builder;
