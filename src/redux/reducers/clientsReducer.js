const clientsReducerDefaultState = [];

export default (state = clientsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_CLIENT":
      return [...state, action.client];
    case "DELETE_CLIENT":
      return state.filter(id => id !== action.id);
    case "UPDATE_CLIENT":
      return state.map(client => {
        if (client.id === action.id) {
          return {
            ...client,
            ...action.updates
          };
        } else {
          return client;
        }
      });
    case "GET_CLIENTS":
      return action.clients;
    default:
      return state;
  }
};
