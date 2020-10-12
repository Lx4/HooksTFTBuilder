import React from "react";
import Board from "../builder/Board";
import Champions from "../builder/Champions";

const Builder = () => {
  return (
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
  );
};

export default Builder;
