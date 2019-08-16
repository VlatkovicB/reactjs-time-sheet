import React from "react";
import { connect } from "react-redux";
import { addClient } from "../redux/actions/clientsActions";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickable: true,
      error: false,
      errorMessage: "",
      nameErrorMessage: "",
      nameError: false,
      name: "",
      address: "",
      city: "",
      postalCode: "",
      countryId: 0
    };
  }

  componentDidMount() {
    // default value for countryId is guaranteed existing country id
    // first entry in database is  {id: , name: 'Select Country'}
    this.setState({
      countryId:
        this.props.countries.length > 0 ? this.props.countries[0].id : 1
    });
  }

  handleSubmit = () => {
    const client = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      postalCode: this.state.postalCode,
      countryId: this.state.countryId
    };

    this.setState({ clickable: false });

    if (client.name.trim() === "") {
      this.setState({
        nameError: true,
        nameErrorMessage: "Name must not be empty."
      });
    } else {
      this.props
        .addClient(client)
        .then(() => {
          // Closing modal window
          window.jQuery.fancybox.close();
          this.resetFields();
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status === 400) {
              this.setState({
                nameError: true,
                nameErrorMessage: "Name is not unique."
              });
            }
          } else if (error.request) {
            this.setState({
              error: true,
              errorMessage: error.message
            });
          }
        });
    }
  };

  // Reseting state to its default values
  resetFields = () => {
    this.setState({
      clickable: true,
      nameError: false,
      error: false,
      errorMessage: "",
      nameErrorMessage: "",
      name: "",
      address: "",
      city: "",
      postalCode: "",
      countryId: this.props.countries[0].id
    });
  };

  // Dynamic set state when one of the members changes
  handleChange = e => {
    let changedMember = e.target.name;
    let change = e.target.value;

    this.setState(() => ({
      nameError: false,
      error: false,
      clickable: true,
      [changedMember]: change
    }));
  };

  render() {
    const countries = this.props.countries;
    const style = {
      color: "black",
      backgroundColor: "#fbc2c4",
      border: "black 1px solid",
      padding: "3px",
      textAlign: "center",
      margin: "0 20%"
    };
    const errorMessage = this.state.error ? (
      <div style={style}>{this.state.errorMessage}</div>
    ) : (
      <div />
    );
    const save = this.state.clickable ? (
      <a href="javascript:;" className="btn green" onClick={this.handleSubmit}>
        Save
      </a>
    ) : (
      <a
        href="javascript:;"
        className="btn green"
        onClick={e => e.preventDefault()}
      >
        Save
      </a>
    );
    const nameError = this.state.nameError ? (
      <li
        style={{
          color: "red"
        }}
      >
        {this.state.nameErrorMessage}
      </li>
    ) : (
      <li />
    );

    return (
      <div>
        <h2>Create new client</h2>
        <ul className="form">
          <li>
            <label>Client name:</label>
            <input
              type="text"
              className={"in-text " + (this.state.nameError ? "error" : "")}
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </li>
          {nameError}
          <li>
            <label>Address:</label>
            <input
              type="text"
              className="in-text"
              name="address"
              onChange={this.handleChange}
              value={this.state.address}
            />
          </li>
          <li>
            <label>City:</label>
            <input
              type="text"
              className="in-text"
              name="city"
              onChange={this.handleChange}
              value={this.state.city}
            />
          </li>
          <li>
            <label>Zip/Postal code:</label>
            <input
              type="text"
              className="in-text"
              name="postalCode"
              onChange={this.handleChange}
              value={this.state.postalCode}
            />
          </li>
          <li>
            <label>Country:</label>
            <select
              onChange={this.handleChange}
              value={this.state.countryId}
              name="countryId"
            >
              {countries.map(country => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </li>
          <li>{errorMessage}</li>
        </ul>
        <div className="buttons">
          <div className="inner">{save}</div>
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
