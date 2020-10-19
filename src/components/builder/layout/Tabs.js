import React, { useContext } from "react";
import FiltersContext from "../../../context/filters/filtersContext";

const Tabs = () => {
  const { setPicker, picker } = useContext(FiltersContext);

  return (
    <div className="inline-flex">
      <button
        onClick={() => setPicker("champions")}
        className={`${
          picker === "champions" ? "bg-gray-300" : "bg-gray-500"
        } hover:bg-gray-400  focus:outline-none text-gray-800 font-bold py-1 px-2 rounded-l text-xs`}
      >
        Champions
      </button>
      <button
        onClick={() => setPicker("items")}
        className={`${
          picker === "items" ? "bg-gray-300" : "bg-gray-500"
        }  hover:bg-gray-900  focus:outline-none text-gray-800 font-bold py-1 px-2 rounded-r text-xs`}
      >
        Items
      </button>
    </div>
  );
};

export default Tabs;
