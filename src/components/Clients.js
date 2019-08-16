import React from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import {
  filterClientsByKeyword,
  filterClientsByLetter,
  getClients
} from "../redux/actions/clientsActions";
import { getCountries } from "../redux/actions/countriesActions";
import Client from "./Client";
import Filter from "./Filter";
import Modal from "./Modal";

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchAvailable: true,
      clients: this.props.clients,
      filterRefreshSwitch: true
    };
    this.timer = null;
  }

  componentDidMount() {
    // places all query strings in one array
    const values = queryString.parse(this.props.location.search);
    // checks if there is letter is entered or if user used search
    if (values.letter) {
      this.props.filterClientsByLetter(values.letter);
    } else if (values.search) {
      this.props.filterClientsByKeyword(values.search);
    }
    this.props.getClients().then(() => {
      this.updateFilter();
    });
    this.props.getCountries();

    // Enables fancybox window for NewUser Modal
    window.jQuery(".new-member-popup").fancybox();
  }

  componentDidUpdate() {
    if (this.props.clients.length === 0) {
      this.props.getClients();
    }
  }

  updateFilter = () => {
    this.setState({ filterRefreshSwitch: false });
    this.setState({ filterRefreshSwitch: true });
  };

  // Clears timer from handleSearchOnChange and instantly searches when enter is pressed
  searchClients = e => {
    clearTimeout(this.timer);
    let keyword = e.target.value;
    let searchAvailable = this.state.searchAvailable;

    if (e.charCode === 13) {
      if (keyword !== "" && keyword.length > 1 && searchAvailable) {
        this.props.filterClientsByKeyword(keyword);

        // Prevent spam enter search, time it out for 500ms
        this.setState({ searchAvailable: false }, () => {
          setTimeout(() => {
            this.setState({ searchAvailable: true });
          }, 500);
        });
      }
    }
  };

  // Filters after certain amount of time has passed since user last entered something
  handleSearchOnChange = e => {
    // clears current time if there is any running
    clearTimeout(this.timer);
    e.persist();

    let word = e.target.value;
    if (word.length > 1) {
      // sets timeout of 1.5s which searches by currently entered keyword
      this.timer = setTimeout(() => {
        this.props.filterClientsByKeyword(e.target.value);
      }, 1500);
    } else if (word.length < 1) {
      // if user deletes everything loads all clients
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
                onKeyPress={this.searchClients}
                onChange={this.handleSearchOnChange}
                placeholder="Search"
              />
            </div>
          </div>
          <div className="new-member-wrap">
            <div id="new-member" className="new-member-inner">
              <Modal />
            </div>
          </div>
          {/* FIXME: Filter re-render */}
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
  { filterClientsByKeyword, filterClientsByLetter, getClients, getCountries }
)(Clients);
