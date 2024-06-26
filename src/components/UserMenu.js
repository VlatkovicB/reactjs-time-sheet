import React from "react";

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { invisible: true };
  }

  render() {
    return (
      <ul className="user right">
        <li>
          <a href="!#">Sladjana Miljanovic</a>
          <div className="invisible" />
          <div className="user-menu">
            <ul>
              <li>
                <a href="!#" className="link">
                  Change password
                </a>
              </li>
              <li>
                <a href="!#" className="link">
                  Settings
                </a>
              </li>
              <li>
                <a href="!#" className="link">
                  Export all data
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="last">
          <a href="!#">Logout</a>
        </li>
      </ul>
    );
  }
}

export default UserMenu;
