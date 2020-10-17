import React, { useContext } from "react";
import FiltersContext from "../../../context/filters/filtersContext";

const Tabs = () => {
  const { setPicker } = useContext(FiltersContext);

  return (
    <div className="inline-flex">
      <button
        onClick={() => setPicker("champions")}
        className="bg-gray-300 border-r border-black hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l text-xs"
      >
        Champions
      </button>
      <button
        onClick={() => setPicker("items")}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r text-xs"
      >
        Items
      </button>
    </div>
  );
};

export default Tabs;
