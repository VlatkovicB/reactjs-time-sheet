import React from "react";
import { connect } from "react-redux";
import { updateClient, deleteClient } from "../redux/actions/clientsActions";
import $ from "jquery";

class Client extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      id: this.props.client.id,
      name: this.props.client.name ? this.props.client.name : "",
      address: this.props.client.address ? this.props.client.address : "",
      city: this.props.client.city ? this.props.client.city : "",
      postalCode: this.props.client.postalCode
        ? this.props.client.postalCode
        : "",
      countryId: this.props.client.countryId ? this.props.client.countryId : 0
    };
  }

  toggleVisible = () => {
    let clientWindow = $("#client" + this.state.id);

    if (!this.state.open) {
      clientWindow.slideDown();
      this.setState(prevState => ({
        open: !prevState.open
      }));
    } else {
      clientWindow.slideUp();
      this.setState(prevState => ({
        open: !prevState.open
      }));
    }
  };

  handleSubmit = () => {
    const client = {
      id: this.state.id,
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      postalCode: this.state.postalCode,
      countryId: this.state.countryId
    };

    this.props.updateClient(client);
    this.toggleVisible();
  };

  handleChange = e => {
    let changedMember = e.target.name;
    let change = e.target.value;

    this.setState(() => ({ [changedMember]: change }));
  };

  handleDelete = () => {
    let clientWindow = $("#client" + this.state.id);
    clientWindow.slideUp();

    setTimeout(() => this.props.deleteClient(this.state.id), 300);
  };

  render() {
    const { name, address, postalCode, countryId } = this.state;
    const countries = this.props.countries;
    const jQuerySelector = "client" + this.props.client.id;


    return (
      <div className="item">
        <div className="heading" onClick={this.toggleVisible}>
          <span>{this.props.client.name}</span>
          <i>+</i>
        </div>
        <div className="details" id={jQuerySelector}>
          <ul className="form">
            <li>
              <label>Client name:</label>
              <input
                name="name"
                type="text"
                className="in-text"
                defaultValue={name}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label>Zip/Postal code:</label>
              <input
                name="postalCode"
                type="text"
                className="in-text"
                defaultValue={postalCode}
                onChange={this.handleChange}
              />
            </li>
          </ul>
          <ul className="form">
            <li>
              <label>Address:</label>
              <input
                name="address"
                type="text"
                className="in-text"
                defaultValue={address}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label>Country:</label>
              <select
                onChange={this.handleChange}
                name="countryId"
                value={countryId}
              >
                {countries.map(country => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </li>
          </ul>
          <ul className="form last">
            <li>
              <label>City:</label>
              <input
                type="text"
                className="in-text"
                name="city"
                onChange={this.handleChange}
              />
            </li>
          </ul>
          <div className="buttons">
            <div className="inner">
              <a href="#" className="btn green" onClick={this.handleSubmit}>
                Save
              </a>{" "}
              <a href="#" className="btn red" onClick={this.handleDelete}>
                Delete
              </a>
            </div>
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
  { updateClient, deleteClient }
)(Client);
