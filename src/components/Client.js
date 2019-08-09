import React from "react";
import { connect } from "react-redux";

class Client extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  toggleVisible = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { open } = this.state;
    const client = this.props.client;
    const countries = this.props.countries;

    return (
      <div className="item">
        <div className="heading" onClick={this.toggleVisible}>
          <span>{client.name}</span>
          <i>+</i>
        </div>
        <div className="details" style={{ display: open ? "block" : "none" }}>
          <ul className="form">
            <li>
              <label>Client name:</label>
              <input type="text" className="in-text" value={client.name} />
            </li>
            <li>
              <label>Zip/Postal code:</label>
              <input
                type="text"
                className="in-text"
                value={client.postalCode ? client.postalCode : ""}
              />
            </li>
          </ul>
          <ul className="form">
            <li>
              <label>Address:</label>
              <input
                type="text"
                className="in-text"
                value={client.address ? client.address : ""}
              />
            </li>
            <li>
              <label>Country:</label>
              <select>
                {/* {countries.filter(country => country.id === client.countryId)} */}

                <option>Select country</option>
                {countries.map(country => (
                  <option key={country.id}>{country.name}</option>
                ))}
              </select>
            </li>
          </ul>
          <ul className="form last">
            <li>
              <label>City:</label>
              <input type="text" className="in-text" />
            </li>
          </ul>
          <div className="buttons">
            <div className="inner">
              <a href="javascript:;" className="btn green">
                Save
              </a>
              <a href="javascript:;" className="btn red">
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

export default connect(mapStateToProps)(Client);
