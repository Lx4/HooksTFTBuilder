import React, { useReducer } from "react";
import BoardContext from "./boardContext";
import BoardReducer from "./boardReducer";
import { initEmptyBoard } from "../../helpers/board";

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

  const handleDropOnSquare = () => {};

  return (
    <BoardContext.Provider value={{ ...state, setBoardDroppable }}>
      {props.children}
    </BoardContext.Provider>
  );
};

export default BoardState;
