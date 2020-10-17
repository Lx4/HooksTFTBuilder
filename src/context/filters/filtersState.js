import React, { useReducer } from "react";
import FiltersReducer from "./filtersReducer";
import FiltersContext from "./filtersContext";

const FiltersState = (props) => {
  const initialState = {
    picker: "champions",
  };

  const [state, dispatch] = useReducer(FiltersReducer, initialState);

  const setPicker = (picker) => {
    dispatch({ type: "SET_PICKER", picker });
  };

  return (
    <FiltersContext.Provider value={{ ...state, setPicker }}>
      {props.children}
    </FiltersContext.Provider>
  );
};

export default FiltersState;
