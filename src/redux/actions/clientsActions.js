import axios from "../../axios/axios";

const _addClient = client => ({
  type: "ADD_CLIENT",
  client
});

export const addClient = (
  clientData = {
    name: "",
    address: "",
    city: "",
    postalCode: "",
    countryId: 0
  }
) => {
  return dispatch => {
    const client = {
      name: clientData.name,
      address: clientData.address,
      city: clientData.city,
      postalCode: clientData.postalCode,
      countryId: clientData.countryId
    };

    return axios.post("clients", client).then(result => {
      dispatch(_addClient(result.data));
    });
  };
};

const _getClients = clients => ({
  type: "GET_CLIENTS",
  clients
});

export const getClients = () => {
  return dispatch => {
    return axios.get("clients").then(result => {
      const clients = [];
      result.data.forEach(client => {
        clients.push(client);
      });
      dispatch(_getClients(clients));
    });
  };
};
