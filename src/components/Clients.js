import React from "react";
import { connect } from "react-redux";

import {
  filterClientsByKeyword,
  filterClientsByLetter,
  getClients
} from "../redux/actions/clientsActions";
import Client from "./Client";
import Filter from "./Filter";

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clients: this.props.clients };
    this.props.getClients();
    this.timer = null;
  }

  componentDidMount() {
    if (this.props.match.params.letter) {
      this.props.filterClientsByLetter(this.props.match.params.letter);
    } else {
      this.setState({
        clients: this.props.clients
      });
    }
  }

  componentDidUpdate() {
    if (this.props.clients.length === 0) {
      this.props.getClients();
    }
  }

  filterClients = e => {
    clearTimeout(this.timer);
    let keyword = e.target.value;
    if (e.charCode === 13) {
      if (keyword !== "" && keyword.length > 1) {
        this.props.filterClientsByKeyword(keyword);
      }
    }
  };

  handleFilterOnChange = e => {
    clearTimeout(this.timer);
    e.persist();

    let word = e.target.value;
    if (word.length > 1) {
      this.timer = setTimeout(() => {
        this.props.filterClientsByKeyword(e.target.value);
      }, 2000);
    } else if (word.length < 1) {
      this.props.getClients();
    }
  };

  render() {
    const clients = this.props.clients.map(client => {
      return <Client key={client.id} client={client} />;
    });

    return (
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico clients" />
            Clients
          </h2>
          <div className="grey-box-wrap reports">
            <a href="#new-member" className="link new-member-popup">
              Create new client
            </a>
            <div className="search-page">
              {/*  SEARCH CLIENTS */}
              <input
                type="search"
                name="search-clients"
                className="in-search"
                onKeyPress={this.filterClients}
                onChange={this.handleFilterOnChange}
                placeholder="Search"
              />
            </div>
          </div>
          <div className="new-member-wrap">
            <div id="new-member" className="new-member-inner">
              <h2>Create new client</h2>
              <ul className="form">
                <li>
                  <label>Client name:</label>
                  <input type="text" className="in-text" />
                </li>
                <li>
                  <label>Address:</label>
                  <input type="text" className="in-text" />
                </li>
                <li>
                  <label>City:</label>
                  <input type="text" className="in-text" />
                </li>
                <li>
                  <label>Zip/Postal code:</label>
                  <input type="text" className="in-text" />
                </li>
                <li>
                  <label>Country:</label>
                  <select>
                    <option>Select country</option>
                  </select>
                </li>
              </ul>
              <div className="buttons">
                <div className="inner">
                  <a href="javascript:;" className="btn green">
                    Save
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Filter />
          {/* Display clients */}
          <div className="accordion-wrap clients">{clients}</div>
          <div className="pagination">
            <ul>
              <li>
                <a href="javascript:;">1</a>
              </li>
              <li>
                <a href="javascript:;">2</a>
              </li>
              <li>
                <a href="javascript:;">3</a>
              </li>
              <li className="last">
                <a href="javascript:;">Next</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clients
  };
};

export default connect(
  mapStateToProps,
  { filterClientsByKeyword, filterClientsByLetter, getClients }
)(Clients);
