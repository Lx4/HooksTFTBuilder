import React from "react";
import Hexagon from "./layout/Hexagon2";

const Synergy = ({ trait }) => {
  const { name, style } = trait;
  return (
    <div className="flex border border-black rounded items-center px-2 mr-2">
      <Hexagon name={name} style={style} />

      <div className="w-5 h-8 ml-1 text-xs text-white  bg-gray-700 flex items-center justify-center rounded">
        {trait.value}
      </div>
      <div className="py-1 pl-2 text-sm">
        <div className="text-white">{name}</div>
        <div className="text-gray-600 text-xs flex flex-no-wrap ">
          {!trait.style ? (
            <span>
              {trait.value} / {trait.sets[0].min}
            </span>
          ) : (
            trait.sets.map((set, index) => {
              return (
                <div key={index} className={`w-6 `}>
                  <span className={`${set.active && "font-bold text-white"}`}>
                    {set.min}
                  </span>
                  {index < trait.sets.length - 1 ? " >" : ""}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Synergy;
