import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Board from "../builder/Board";
import Champions from "../builder/Champions";

const Builder = () => {
  return (
    <DndProvider backend={HTML5Backend}>
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
    </DndProvider>
  );
};

export default Builder;
