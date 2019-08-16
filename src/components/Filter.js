import React from "react";
import { connect } from "react-redux";
import {
  filterClientsByLetter,
  getClients
} from "../redux/actions/clientsActions";
import $ from "jquery";
import { Link } from "react-router-dom";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: [..."abcdefghijklmnopqrstuvwxyz"],
      clients: this.props.clients
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.clients !== state.clients) {
      return {
        clients: props.clients
      };
    }
    return null;
  }

  // Checks clients names if there are any starting with given Letter
  checkDisabled = letter => {
    const list = this.state.clients.filter(
      client => client.name.charAt(0).toLowerCase() === letter
    );
    return list.length === 0;
  };

  // Handles click on Letter, disables/enables active on selection
  handleClick = e => {
    let value = e.target.getAttribute("value");
    let selected = $("#letter" + value);

    // If selected letter already has 'active' - removes it.
    if (!selected.hasClass("active")) {
      $(".alpha li").removeClass("active");
    }

    if (!selected.hasClass("disabled")) {
      if (!selected.hasClass("active")) {
        selected.addClass("active");
        this.props.filterClientsByLetter(value);
      } else {
        selected.removeClass("active");
        this.props.getClients();
      }
    }
  };

  render() {
    const letters = this.state.letters;

    return (
      <div className="alpha">
        <ul>
          {letters.map(letter => (
            <li
              key={letter}
              className={this.checkDisabled(letter) ? "disabled" : ""}
              id={"letter" + letter}
            >
              <Link
                to={"/clients/?letter=" + letter}
                onClick={this.handleClick}
                value={letter}
              >
                {letter}
              </Link>
            </li>
          ))}
        </ul>
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
  { filterClientsByLetter, getClients }
)(Filter);
