import React from "react";
import "./Dashboard.css";
import { Header } from "../Header/Header";
import { ordersData } from "../../data/data";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-section">
        <div className="section-heading">
          <h3>Overview</h3>

          <div className="select-container">
            <select className="select-box">
              <option>Last Month</option>
              <option>Last 3 Months</option>
              <option>Last 6 Months</option>
            </select>
            <div className="select-icon">
              <i class="fa fa-caret-down"></i>

            </div>
         
          </div>
        </div>

        {/* <div class="custom-arrow">
              <img src="https://dukaan-assignment-two.vercel.app/images/img_arrowdown_gray_800.svg" alt="" srcset="" />
            </div> */}

        <div className="tile-section">
          <div className="tile-one">
            <div className="inner-content">
              <p>Online Orders</p>
              <h3>231</h3>
            </div>
          </div>
          <div className="tile-two">
            <div className="inner-content">
              <p>Amount received</p>
              <h3>₹23,92,312.19</h3>
            </div>
          </div>
        </div>

        <div className="table-section">
          <div className="table-heading">
            <h3>Transactions | This Month</h3>
          </div>
          <div className="table-frame">
            <div className="table-top">
              <div className="table-search">
                <i className="fa fa-search"></i>
                <input type="search" placeholder="Search by order ID..." />
              </div>
              <div className="table-top-icons">
                <div className="sort-div">
                  <button>
                    Sort
                    <img
                      src="https://dukaan-assignment-two.vercel.app/images/img_share.svg"
                      alt="sort-icon"
                    />
                  </button>
                </div>
                <button className="download-btn">
                  {" "}
                  <img
                    src="https://dukaan-assignment-two.vercel.app/images/img_download.svg"
                    alt="download"
                  />
                </button>
              </div>
            </div>
            <div className="table">
              <table>
                <thead>
                  <th>Order ID</th>
                  <th>Order Date</th>
                  <th>Order Amount</th>
                  <th >
                    Transaction Fees
                    <img
                      src="https://dukaan-assignment-two.vercel.app/images/img_outlinedinfo.svg"
                      alt="outline-icon"
                    />
                  </th>
                </thead>
                <tbody>
                  {ordersData.map(
                    ({ orderId, orderDate, orderAmount, transactionFees }) => {
                      return (
                        <tr key={orderId}>
                          <td className="td-blue">{orderId}</td>
                          <td>{orderDate}</td>
                          <td>{orderAmount}</td>
                          <td>{transactionFees}</td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
              <div className="table-bottom">
                <div className="pagination">
                  <div className="p-btn">
                    <img
                      src="https://dukaan-assignment-two.vercel.app/images/img_arrowleft.svg"
                      alt="arrow-left"
                    />
                    <div className="p-text">Previous</div>
                  </div>

                  <div className="p-numbers">
                    <div>1</div>
                    <div>...</div>
                    <div className="p-checked">10</div>
                    <div>11</div>
                    <div>12</div>
                    <div>13</div>
                    <div>14</div>
                    <div>15</div>
                    <div>16</div>
                    <div>17</div>
                    <div>18</div>
                  </div>

                  <div className="p-btn">
                    <div className="p-text">Next</div>
                    <img
                      src="https://dukaan-assignment-two.vercel.app/images/img_arrowright.svg"
                      alt="arrow-left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
