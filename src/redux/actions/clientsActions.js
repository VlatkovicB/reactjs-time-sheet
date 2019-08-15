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

    return axios.post("clients", client).then(response => {
      dispatch(_addClient(response.data));
    });
  };
};

const _getClients = clients => ({
  type: "GET_CLIENTS",
  clients
});

export const getClients = () => {
  return dispatch => {
    return axios.get("clients").then(response => {
      const clients = [];
      response.data.forEach(client => {
        clients.push(client);
      });
      dispatch(_getClients(clients));
    });
  };
};

const _updateClient = client => ({
  type: "UPDATE_CLIENT",
  client
});

export const updateClient = client => {
  return dispatch => {
    return axios.put("clients", client).then(response => {
      if (response.status === 204) {
        dispatch(_updateClient(client));
      }
    });
  };
};

const _deleteClient = id => ({
  type: "DELETE_CLIENT",
  id
});

export const deleteClient = id => {
  return dispatch => {
    return axios.delete("clients/" + id).then(() => {
      dispatch(_deleteClient(id));
    });
  };
};

export const filterClientsByKeyword = keyword => {
  return dispatch => {
    return axios.get("clients?keyword=" + keyword).then(response => {
      const clients = [];
      response.data.forEach(client => {
        clients.push(client);
      });
      dispatch(_getClients(clients));
    });
  };
};

export const filterClientsByLetter = letter => {
  return dispatch => {
    return axios.get("clients?letter=" + letter).then(response => {
      const clients = [];
      if (response.data) {
        response.data.forEach(client => {
          clients.push(client);
        });
      }
      dispatch(_getClients(clients));
    });
  };
};
