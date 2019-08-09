import axios from "../../axios/axios";

const _getCountries = countries => ({
  type: "GET_COUNTRIES",
  countries
});

export const getCountries = () => {
  return dispatch => {
    return axios.get("countries").then(result => {
      const countries = [];
      result.data.forEach(country => {
        countries.push(country);
      });
      dispatch(_getCountries(countries));
    });
  };
};
