import React from "react";
import Project from "./Project";
import Filter from "./Filter";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico projects" />
            Projects
          </h2>
          <div className="grey-box-wrap reports">
            <a href="#new-member" className="link new-member-popup">
              Create new project
            </a>
            <div className="search-page">
              <input
                type="search"
                name="search-clients"
                className="in-search"
              />
            </div>
          </div>
          <div className="new-member-wrap">
            <div id="new-member" className="new-member-inner">
              <h2>Create new project</h2>
              <ul className="form">
                <li>
                  <label>Project name:</label>
                  <input type="text" className="in-text" />
                </li>
                <li>
                  <label>Description:</label>
                  <input type="text" className="in-text" />
                </li>
                <li>
                  <label>Customer:</label>
                  <select>
                    <option>Select customer</option>
                    <option>Adam Software NV</option>
                    <option>Clockwork</option>
                    <option>Emperor Design</option>
                  </select>
                </li>
                <li>
                  <label>Lead:</label>
                  <select>
                    <option>Select lead</option>
                    <option>Sasa Popovic</option>
                    <option>Sladjana Miljanovic</option>
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
          <div className="accordion-wrap projects">
            <Project />
            <div className="item">
              <div className="heading">
                <span>PWN</span>{" "}
                <span>
                  <em>(Clockwork)</em>
                </span>
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
            <div className="item">
              <div className="heading">
                <span>B&G</span>{" "}
                <span>
                  <em>(Cubeworks)</em>
                </span>
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
          </div>
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

export default Projects;
