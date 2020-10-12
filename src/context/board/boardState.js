import React, { useReducer } from "react";
import BoardContext from "./boardContext";
import BoardReducer from "./boardReducer";
import initEmptyBoard from "../../helpers/board";

const BoardState = (props) => {
  const initialState = {
    board: initEmptyBoard(),
    droppable: false,
  };

  const [state, dispatch] = useReducer(BoardReducer, initialState);

  // actions dispatcher

  // set Droppable
  const setDroppable = () => {
    dispatch({ type: "SET_DROPPABLE" });
  };

  return (
    <BoardContext.Provider value={{ state, setDroppable }}>
      {props.children}
    </BoardContext.Provider>
  );
};
