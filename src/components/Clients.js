import React from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import {
  filterClientsByKeyword,
  filterClientsByLetter,
  getClients
} from "../redux/actions/clientsActions";
import Client from "./Client";
import Filter from "./Filter";
import Modal from "./Modal";

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clients: this.props.clients, open: false };
    this.props.getClients();
    this.timer = null;
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    if (values.letter) {
      this.props.filterClientsByLetter(values.letter);
    } else if (values.search) {
      this.props.filterClientsByKeyword(values.search);
    } else {
      this.setState({
        clients: this.props.clients
      });
    }

    window.jQuery(".new-member-popup").fancybox();
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
      }, 1500);
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
            <a
              data-src="#new-member"
              href="#new-member"
              data-fancybox
              className="link new-member-popup"
            >
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
              <Modal />
            </div>
          </div>
          <Filter />
          {/* Display clients */}
          <div className="accordion-wrap clients">{clients}</div>
          <div className="pagination">
            <ul>
              <li>
                <a href="!#">1</a>
              </li>
              <li>
                <a href="!#">2</a>
              </li>
              <li>
                <a href="!#">3</a>
              </li>
              <li className="last">
                <a href="!#">Next</a>
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
