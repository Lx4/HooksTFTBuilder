import React, { useReducer } from "react";
import BoardContext from "./boardContext";
import BoardReducer from "./boardReducer";
import { initEmptyBoard, findFirstEmptySquare } from "../../helpers/board";
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

  const handleDropOnSquare = (champion, row, column) => {
    dispatch({
      type: "ADD_CHAMPION",
      champion,
      row,
      column,
    });
  };

  // handle a non specific position addition to the board
  function addToBoard(championId) {
    const [row, column] = findFirstEmptySquare(state.board);
    if (row === -1) return;
    // we could change the alert state (tbd) to pop up a board full alert
    else {
      dispatch({
        type: "ADD_CHAMPION",
        champion: initChampion(championId),
        row,
        column,
      });
    }
  }

  return (
    <BoardContext.Provider
      value={{ ...state, setBoardDroppable, handleDropOnSquare, addToBoard }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

export default BoardState;
