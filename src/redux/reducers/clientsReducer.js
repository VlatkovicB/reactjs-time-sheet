const clientsReducerDefaultState = [];

export default (state = clientsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_CLIENT":
      return [...state, action.client];
    case "DELETE_CLIENT":
      return state.filter(client => client.id !== action.id);
    case "UPDATE_CLIENT":
      return state.map(client => {
        return client.id === action.client.id ? action.client : client;
      });
    case "GET_CLIENTS":
      return action.clients;
    default:
      return state;
  }
};
