import React from "react";
import BoardState from "./context/board/boardState";

import Builder from "./components/pages/Builder";

const App = () => (
  <BoardState>
    <div className="container mx-auto bg-gray-800">
      <Builder />
    </div>
  </BoardState>
);

export default App;
