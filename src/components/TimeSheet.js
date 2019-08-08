import React from "react";

class TimeSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico timesheet" />
            TimeSheet
          </h2>
          <div className="grey-box-wrap">
            <div className="top">
              <a href="javascript:;" className="prev">
                <i className="zmdi zmdi-chevron-left" />
                previous month
              </a>
              <span className="center">February, 2013</span>
              <a href="javascript:;" className="next">
                next month
                <i className="zmdi zmdi-chevron-right" />
              </a>
            </div>
            <div className="bottom" />
          </div>
          <table className="month-table">
            <tr className="head">
              <th>
                <span>monday</span>
              </th>
              <th>tuesday</th>
              <th>wednesday</th>
              <th>thursday</th>
              <th>friday</th>
              <th>saturday</th>
              <th>sunday</th>
            </tr>
            <tr className="mobile-head">
              <th>mon</th>
              <th>tue</th>
              <th>wed</th>
              <th>thu</th>
              <th>fri</th>
              <th>sat</th>
              <th>sun</th>
            </tr>
            <tr>
              <td className="positive previous">
                <div className="date">
                  <span>28.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td className="positive previous">
                <div className="date">
                  <span>29.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td className="positive previous">
                <div className="date">
                  <span>30.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td className="positive previous">
                <div className="date">
                  <span>31.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td className="positive">
                <div className="date">
                  <span>1.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td>
                <div className="date">
                  <span>2.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
              <td>
                <div className="date">
                  <span>3.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td className="positive">
                <div className="date">
                  <span>4.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td className="positive">
                <div className="date">
                  <span>5.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td className="positive">
                <div className="date">
                  <span>6.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td className="positive">
                <div className="date">
                  <span>7.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td className="positive">
                <div className="date">
                  <span>8.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td>
                <div className="date">
                  <span>9.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
              <td>
                <div className="date">
                  <span>10.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td className="positive">
                <div className="date">
                  <span>11.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td className="positive">
                <div className="date">
                  <span>12.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td className="positive">
                <div className="date">
                  <span>13.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td className="positive">
                <div className="date">
                  <span>14.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td className="positive">
                <div className="date">
                  <span>15.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td>
                <div className="date">
                  <span>16.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
              <td>
                <div className="date">
                  <span>17.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td className="negative">
                <div className="date">
                  <span>18.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>4</span>
                  </a>
                </div>
              </td>
              <td>
                <div className="date">
                  <span>19.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
              <td className="positive">
                <div className="date">
                  <span>20.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>7.5</span>
                  </a>
                </div>
              </td>
              <td>
                <div className="date">
                  <span>21.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
              <td className="disable">
                <div className="date">
                  <span>22.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
              <td className="disable">
                <div className="date">
                  <span>23.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
              <td className="disable">
                <div className="date">
                  <span>24.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td className="disable">
                <div className="date">
                  <span>25.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
              <td className="disable">
                <div className="date">
                  <span>26.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
              <td className="disable">
                <div className="date">
                  <span>27.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
              <td className="disable">
                <div className="date">
                  <span>28.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
              <td className="disable">
                <div className="date">
                  <span>1.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
              <td className="disable">
                <div className="date">
                  <span>2.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
              <td className="disable">
                <div className="date">
                  <span>3.</span>
                </div>
                <div className="hours">
                  <a href="days.html">
                    Hours: <span>0</span>
                  </a>
                </div>
              </td>
            </tr>
          </table>
          <div className="total">
            <span>
              Total hours: <em>90</em>
            </span>
          </div>
        </section>
      </div>
    );
  }
}

export default TimeSheet;
