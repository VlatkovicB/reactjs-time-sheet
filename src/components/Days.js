import React from "react";
import { Link } from "react-router-dom";

const Days = () => {
  return (
    <div class="wrapper">
      <section class="content">
        <h2>
          <i class="ico timesheet" />TimeSheet
        </h2>
        <div class="grey-box-wrap">
          <div class="top">
            <a href="javascript:;" class="prev">
              <i class="zmdi zmdi-chevron-left" />
              previous week
            </a>
            <span class="center">February 04 - February 10, 2013 (week 6)</span>
            <a href="javascript:;" class="next">
              next week
              <i class="zmdi zmdi-chevron-right" />
            </a>
          </div>
          <div class="bottom">
            <ul class="days">
              <li>
                <a href="javascript:;">
                  <b>Feb 04</b>
                  <p>7.5</p>
                  <span>monday</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <b>Feb 06</b>
                  <p>7.5</p>
                  <span>tuesday</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <b>Feb 06</b>
                  <p>7.5</p>
                  <span>wednesday</span>
                </a>
              </li>
              <li class="active">
                <a href="javascript:;">
                  <b>Feb 07</b>
                  <p>7.5</p>
                  <span>thursday</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <b>Feb 08</b>
                  <p>7.5</p>
                  <span>friday</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <b>Feb 09</b>
                  <p>0.0</p>
                  <span>saturday</span>
                </a>
              </li>
              <li class="last">
                <a href="javascript:;">
                  <b>Feb 10</b>
                  <p>0.0</p>
                  <span>sunday</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <table class="default-table">
          <tr>
            <th>
              Client <em>*</em>
            </th>
            <th>
              Project <em>*</em>
            </th>
            <th>
              Category <em>*</em>
            </th>
            <th>Description</th>
            <th class="small">
              Time <em>*</em>
            </th>
            <th class="small">Overtime</th>
          </tr>
          <tr>
            <td>
              <select>
                <option>Choose client</option>
                <option>Client 1</option>
                <option>Client 2</option>
              </select>
            </td>
            <td>
              <select>
                <option>Choose project</option>
                <option>Project 1</option>
                <option>Project 2</option>
              </select>
            </td>
            <td>
              <select>
                <option>Choose category</option>
                <option>Front-End Development</option>
                <option>Design</option>
              </select>
            </td>
            <td>
              <input type="text" class="in-text medium" />
            </td>
            <td class="small">
              <input type="text" class="in-text xsmall" />
            </td>
            <td class="small">
              <input type="text" class="in-text xsmall" />
            </td>
          </tr>
          <tr>
            <td>
              <select>
                <option>Choose client</option>
                <option>Client 1</option>
                <option>Client 2</option>
              </select>
            </td>
            <td>
              <select>
                <option>Choose project</option>
                <option>Project 1</option>
                <option>Project 2</option>
              </select>
            </td>
            <td>
              <select>
                <option>Choose category</option>
                <option>Front-End Development</option>
                <option>Design</option>
              </select>
            </td>
            <td>
              <input type="text" class="in-text medium" />
            </td>
            <td class="small">
              <input type="text" class="in-text xsmall" />
            </td>
            <td class="small">
              <input type="text" class="in-text xsmall" />
            </td>
          </tr>
          <tr>
            <td>
              <select>
                <option>Choose client</option>
                <option>Client 1</option>
                <option>Client 2</option>
              </select>
            </td>
            <td>
              <select>
                <option>Choose project</option>
                <option>Project 1</option>
                <option>Project 2</option>
              </select>
            </td>
            <td>
              <select>
                <option>Choose category</option>
                <option>Front-End Development</option>
                <option>Design</option>
              </select>
            </td>
            <td>
              <input type="text" class="in-text medium" />
            </td>
            <td class="small">
              <input type="text" class="in-text xsmall" />
            </td>
            <td class="small">
              <input type="text" class="in-text xsmall" />
            </td>
          </tr>
          <tr>
            <td>
              <select>
                <option>Choose client</option>
                <option>Client 1</option>
                <option>Client 2</option>
              </select>
            </td>
            <td>
              <select>
                <option>Choose project</option>
                <option>Project 1</option>
                <option>Project 2</option>
              </select>
            </td>
            <td>
              <select>
                <option>Choose category</option>
                <option>Front-End Development</option>
                <option>Design</option>
              </select>
            </td>
            <td>
              <input type="text" class="in-text medium" />
            </td>
            <td class="small">
              <input type="text" class="in-text xsmall" />
            </td>
            <td class="small">
              <input type="text" class="in-text xsmall" />
            </td>
          </tr>
          <tr>
            <td>
              <select>
                <option>Choose client</option>
                <option>Client 1</option>
                <option>Client 2</option>
              </select>
            </td>
            <td>
              <select>
                <option>Choose project</option>
                <option>Project 1</option>
                <option>Project 2</option>
              </select>
            </td>
            <td>
              <select>
                <option>Choose category</option>
                <option>Front-End Development</option>
                <option>Design</option>
              </select>
            </td>
            <td>
              <input type="text" class="in-text medium" />
            </td>
            <td class="small">
              <input type="text" class="in-text xsmall" />
            </td>
            <td class="small">
              <input type="text" class="in-text xsmall" />
            </td>
          </tr>
          <tr>
            <td>
              <select>
                <option>Choose client</option>
                <option>Client 1</option>
                <option>Client 2</option>
              </select>
            </td>
            <td>
              <select>
                <option>Choose project</option>
                <option>Project 1</option>
                <option>Project 2</option>
              </select>
            </td>
            <td>
              <select>
                <option>Choose category</option>
                <option>Front-End Development</option>
                <option>Design</option>
              </select>
            </td>
            <td>
              <input type="text" class="in-text medium" />
            </td>
            <td class="small">
              <input type="text" class="in-text xsmall" />
            </td>
            <td class="small">
              <input type="text" class="in-text xsmall" />
            </td>
          </tr>
          <tr>
            <td>
              <select>
                <option>Choose client</option>
                <option>Client 1</option>
                <option>Client 2</option>
              </select>
            </td>
            <td>
              <select>
                <option>Choose project</option>
                <option>Project 1</option>
                <option>Project 2</option>
              </select>
            </td>
            <td>
              <select>
                <option>Choose category</option>
                <option>Front-End Development</option>
                <option>Design</option>
              </select>
            </td>
            <td>
              <input type="text" class="in-text medium" />
            </td>
            <td class="small">
              <input type="text" class="in-text xsmall" />
            </td>
            <td class="small">
              <input type="text" class="in-text xsmall" />
            </td>
          </tr>
        </table>

        <div class="total">
          <Link to="/">
            <i />
            back to monthly view
          </Link>
          <span>
            Total hours: <em>7.5</em>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Days;
