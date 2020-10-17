export default (state, action) => {
  switch (action.type) {
    case "SET_PICKER":
      return {
        ...state,
        picker: action.picker,
      };
  }
};
