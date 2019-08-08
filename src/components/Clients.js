import React from "react";

const Clients = () => {
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
            <input type="search" name="search-clients" className="in-search" />
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
        <div className="alpha">
          <ul>
            <li>
              <a href="javascript:;">a</a>
            </li>
            <li>
              <a href="javascript:;">b</a>
            </li>
            <li>
              <a href="javascript:;">c</a>
            </li>
            <li>
              <a href="javascript:;">d</a>
            </li>
            <li>
              <a href="javascript:;">e</a>
            </li>
            <li className="active">
              <a href="javascript:;">f</a>
            </li>
            <li>
              <a href="javascript:;">g</a>
            </li>
            <li>
              <a href="javascript:;">h</a>
            </li>
            <li>
              <a href="javascript:;">i</a>
            </li>
            <li>
              <a href="javascript:;">j</a>
            </li>
            <li>
              <a href="javascript:;">k</a>
            </li>
            <li>
              <a href="javascript:;">l</a>
            </li>
            <li className="disabled">
              <a href="javascript:;">m</a>
            </li>
            <li>
              <a href="javascript:;">n</a>
            </li>
            <li>
              <a href="javascript:;">o</a>
            </li>
            <li>
              <a href="javascript:;">p</a>
            </li>
            <li>
              <a href="javascript:;">q</a>
            </li>
            <li>
              <a href="javascript:;">r</a>
            </li>
            <li>
              <a href="javascript:;">s</a>
            </li>
            <li>
              <a href="javascript:;">t</a>
            </li>
            <li>
              <a href="javascript:;">u</a>
            </li>
            <li>
              <a href="javascript:;">v</a>
            </li>
            <li>
              <a href="javascript:;">w</a>
            </li>
            <li>
              <a href="javascript:;">x</a>
            </li>
            <li>
              <a href="javascript:;">y</a>
            </li>
            <li className="last">
              <a href="javascript:;">z</a>
            </li>
          </ul>
        </div>
        <div className="accordion-wrap clients">
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
          <div className="item">
            <div className="heading">
              <span>Clockwork</span>
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
              <span>Emperor Design</span>
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
      <script type="text/javascript" src="assets/scripts/main/accordion.js" />
      <script
        type="text/javascript"
        src="assets/scripts/libs/jquery.fancybox.js"
      />
    </div>
  );
};

export default Clients;
