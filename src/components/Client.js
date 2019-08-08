import React from "react";

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="item">
        <div className="heading">
          <span>ADAM Software NV</span>
          <i>+</i>
        </div>
        <div className="details">
          <ul className="form">
            <li>
              <label>Client name:</label>
              <input type="text" className="in-text" />
            </li>
            <li>
              <label>Zip/Postal code:</label>
              <input type="text" className="in-text" />
            </li>
          </ul>
          <ul className="form">
            <li>
              <label>Address:</label>
              <input type="text" className="in-text" />
            </li>
            <li>
              <label>Country:</label>
              <select>
                <option>Select country</option>
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

export default Client;
