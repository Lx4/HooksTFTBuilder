import React, { useContext } from "react";
import FiltersContext from "../../../context/filters/filtersContext";

const Tabs = () => {
  const { setPicker, picker } = useContext(FiltersContext);

  return (
    <div className="inline-flex mt-2 sm:mt-4">
      <button
        onClick={() => setPicker("champions")}
        className={`${
          picker === "champions" ? "bg-gray-300" : "bg-gray-500"
        }  py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm rounded-l hover:bg-gray-400  focus:outline-none text-gray-800 font-bold `}
      >
        Champions
      </button>
      <button
        onClick={() => setPicker("items")}
        className={`${
          picker === "items" ? "bg-gray-300" : "bg-gray-500"
        }   py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm  hover:bg-gray-900  focus:outline-none text-gray-800 font-bold rounded-r `}
      >
        Items
      </button>
    </div>
  );
};

export default Tabs;
