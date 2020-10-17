import React from "react";
import BoardState from "./context/board/boardState";
import FilterState from "./context/filters/filtersState";

import Builder from "./components/pages/Builder";

const App = () => (
  <BoardState>
    <FilterState>
      <div className="container mx-auto bg-gray-800">
        <Builder />
      </div>
    </FilterState>
  </BoardState>
);

export default App;
