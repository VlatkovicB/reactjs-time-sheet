import React from "react";
import { connect } from "react-redux";
import { updateClient, deleteClient } from "../redux/actions/clientsActions";
import $ from "jquery";

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      nameError: false,
      clickable: true,
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

  // Toggles window visibility
  toggleVisible = () => {
    let clientWindow = $("#client" + this.state.id);

    // Opens or closes client window, resets field on open
    if (!this.state.open) {
      clientWindow.slideDown();
      this.setState(prevState => ({
        open: !prevState.open
      }));
      this.resetFields();
    } else {
      clientWindow.slideUp();
      this.setState(prevState => ({
        open: !prevState.open
      }));
    }
  };

  // Handle submit when save is pressed
  handleSubmit = () => {
    const client = {
      id: this.state.id,
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      postalCode: this.state.postalCode,
      countryId: this.state.countryId
    };

    if (client.name.trim() === "") {
      this.setState({
        nameError: true
      });
    } else {
      // TODO: CLICKABLE
      //checks if button is clickable
      if (this.state.clickable) {
        this.setState({ clickable: false });
        this.props
          .updateClient(client)
          .then(() => {
            this.resetFields();
            this.toggleVisible();
          })
          .catch(error => {
            // TODO: moved error handling
            if (error.response) {
              if (error.response.status === 409) {
                this.setState({
                  nameError: true
                });
              }
              //  handle for error codes 404, 400
            } else if (error.request) {
              console.log(error);
            }
          });
      }
    }
  };

  // changes state values dynamically, resets error fields
  handleChange = e => {
    let changedMember = e.target.name;
    let change = e.target.value;

    this.setState(() => ({
      nameError: false,
      clickable: true,
      [changedMember]: change
    }));
  };

  // Handles delete when Delete is pressed
  handleDelete = () => {
    let clientWindow = $("#client" + this.state.id);
    clientWindow.slideUp();

    // checks if the button is clickable
    if (this.state.clickable) {
      this.setState({ clickable: false });
      // time out to allow slide-up animation TODO: Any other way?
      setTimeout(() => {
        this.props.deleteClient(this.state.id);
      }, 400);
    }
  };

  resetFields = () => {
    this.setState({
      clickable: true,
      nameError: false,
      id: this.props.client.id,
      name: this.props.client.name ? this.props.client.name : "",
      address: this.props.client.address ? this.props.client.address : "",
      city: this.props.client.city ? this.props.client.city : "",
      postalCode: this.props.client.postalCode
        ? this.props.client.postalCode
        : "",
      countryId: this.props.client.countryId ? this.props.client.countryId : 0
    });
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
                className={"in-text " + (this.state.nameError ? "error" : "")}
                value={name}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label>Zip/Postal code:</label>
              <input
                name="postalCode"
                type="text"
                className="in-text"
                value={postalCode}
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
                value={address}
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
              <a
                href="javascript:;"
                className="btn green"
                onClick={this.handleSubmit}
              >
                Save
              </a>{" "}
              <a
                href="javascript:;"
                className="btn red"
                onClick={this.handleDelete}
              >
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
