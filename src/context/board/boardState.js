import React, { useReducer } from "react";
import BoardContext from "./boardContext";
import BoardReducer from "./boardReducer";
import { initEmptyBoard, findFirstEmptySquare } from "../../helpers/board";
import { initChampion } from "../../selectors/champion";

const BoardState = (props) => {
  const initialState = {
    board: initEmptyBoard(),
    boardDroppable: false,
    itemsDroppable: false,
    championsDroppable: false,
  };

  const [state, dispatch] = useReducer(BoardReducer, initialState);

  const setDroppable = (target, bool) => {
    dispatch({ type: "SET_DROPPABLE", target, bool });
  };

  // to mix with addToBoard
  const addChampion = (champion, row, column) => {
    dispatch({
      type: "ADD_CHAMPION",
      champion : initChampion(champion.championId),
      row,
      column,
    });
  };

  const updateChampion = (champion, row, column) => {
    dispatch({
      type: "UPDATE_CHAMPION",
      champion,
      row,
      column,
    });
  };

  const swapSquares = (originRow, originCol, targetRow, targetCol) => {
    dispatch({
      type: "SWAP_SQUARES",
      originRow,
      originCol,
      targetRow,
      targetCol,
    });
  };

  const clearSquare = (row, col) => {
    dispatch({
      type: "CLEAR_SQUARE",
      row,
      col,
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
      value={{
        ...state,
        setDroppable,
        addChampion,
        addToBoard,
        swapSquares,
        clearSquare,
        updateChampion,
      }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

export default BoardState;
