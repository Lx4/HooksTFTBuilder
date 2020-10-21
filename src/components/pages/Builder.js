import React, { useContext } from "react";
import { DndProvider, usePreview } from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch";

import Board from "../builder/Board";
import Champions from "../builder/Champions";
import Items from "../builder/Items";
import Tabs from "../builder/layout/Tabs";
import SynergyList from "../builder/SynergyList.js";

import FiltersContext from "../../context/filters/filtersContext";

import { getIdFormated } from "../../helpers/items";

import "../builder/Champion.css";

// Enable Preview for Touch Backend in items & champions pickers
const MyPreview = () => {
  // eslint-disable-next-line
  const { display, itemType, item, style } = usePreview();
  if (!display) {
    return null;
  }
  switch (itemType) {
    case "champion":
      const { championId, cost } = item.champion;

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
    case "item":
      const id = getIdFormated(item.item.id);
      const name = item.item.name;
      return (
        <div
          className="h-8 w-8 sm:h-16 sm:w-16 sm:mr-1 sm:mb-1 object-cover rounded overflow-hidden"
          style={style}
        >
          <img
            src={`${process.env.REACT_APP_URL_IMG}/img/items/${id}.png`}
            alt={`${name}`}
          />
        </div>
      );
    default:
      return null;
  }
};

const Builder = () => {
  const { picker } = useContext(FiltersContext);
  return (
    <DndProvider options={HTML5toTouch}>
      <header className="h-12 bg-gray-900 shadow-lg px-1 flex flex-col items-center justify-center">
        <div>
          <h1 className="inline font text-xl text-teal-500">Builder</h1>
          <span className="text-gray-600 pl-1 text-xs">by Lx4</span>
        </div>
      </header>
      <div className="xl:flex">
        <SynergyList />
        <div className="mt-4 xl:ml-12">
          <Board />
          <div className="mx-auto max-w-sm sm:max-w-xl lg:max-w-2xl">
            <Tabs />
            <div className="mt-4">
              {picker === "champions" && <Champions />}
              {picker === "items" && <Items />}
            </div>
          </div>
        </div>
      </div>

      <MyPreview />
    </DndProvider>
  );
};

export default Builder;
