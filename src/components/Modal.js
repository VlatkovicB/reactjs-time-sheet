import React from "react";
import { connect } from "react-redux";
import { addClient } from "../redux/actions/clientsActions";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      postalCode: "",
      countryId: 0
    };
  }

  handleSubmit = () => {
    const client = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      postalCode: this.state.postalCode,
      countryId: this.state.countryId
    };

    this.props.addClient(client);
    // catch error and handle
    this.setState({
      name: "",
      address: "",
      city: "",
      postalCode: "",
      countryId: 0
    });
    window.jQuery.fancybox.close();
  };

  handleChange = e => {
    let changedMember = e.target.name;
    let change = e.target.value;

    this.setState(() => ({ [changedMember]: change }));
  };

  render() {
    const countries = this.props.countries;

    return (
      <div>
        <h2>Create new client</h2>
        <ul className="form">
          <li>
            <label>Client name:</label>
            <input
              type="text"
              className="in-text"
              name="name"
              onChange={this.handleChange}
              required
            />
          </li>
          <li>
            <label>Address:</label>
            <input
              type="text"
              className="in-text"
              name="address"
              onChange={this.handleChange}
            />
          </li>
          <li>
            <label>City:</label>
            <input
              type="text"
              className="in-text"
              name="city"
              onChange={this.handleChange}
            />
          </li>
          <li>
            <label>Zip/Postal code:</label>
            <input
              type="text"
              className="in-text"
              name="postalCode"
              onChange={this.handleChange}
            />
          </li>
          <li>
            <label>Country:</label>
            <select onChange={this.handleChange} name="countryId">
              {countries.map(country => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </li>
        </ul>
        <div className="buttons">
          <div className="inner">
            <a
              href="javascript:;"
              className="btn green"
              onClick={this.handleSubmit}
            >
              Save
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries
  };
};

export default connect(
  mapStateToProps,
  { addClient }
)(Modal);
