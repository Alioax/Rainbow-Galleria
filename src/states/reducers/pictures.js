const pictures = (state = 0, action) => {
  switch (action.type) {
    case "PICTURES_FETCHING":
      return state + action.payload;

    case "PICTURES_FETCHED":
      return state + action.payload;

    case "PICTURES_FETCH":
      return state + action.payload;

    default:
      return state;
  }
};

export default pictures;
