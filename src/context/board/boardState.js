import React, { useReducer } from "react";
import BoardContext from "./boardContext";
import BoardReducer from "./boardReducer";
import { initEmptyBoard } from "../../helpers/board";
import { initChampion } from "../../selectors/champion";

const BoardState = (props) => {
  const initialState = {
    board: initEmptyBoard(),
    droppable: false,
  };

  const [state, dispatch] = useReducer(BoardReducer, initialState);

  // Set Board droppable
  const setBoardDroppable = (bool) => {
    dispatch({ type: "SET_DROPPABLE", bool });
  };

  const handleDropOnSquare = (e, row, column) => {
    const source = e.dataTransfer.getData("source");
    if (source === "championsPicker") {
      const champion = initChampion(e.dataTransfer.getData("champId"));
      dispatch({
        type: "DROP_CHAMPION",
        champion,
        row,
        column,
      });
    }
  };

  return (
    <BoardContext.Provider
      value={{ ...state, setBoardDroppable, handleDropOnSquare }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

export default BoardState;
