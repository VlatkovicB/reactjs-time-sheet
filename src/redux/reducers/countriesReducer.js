const countriesReducerDefaultState = [];

export default (state = countriesReducerDefaultState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return action.countries;
    default:
      return state;
  }
};
