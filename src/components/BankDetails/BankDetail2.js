import React from 'react';
import moment from 'moment';
import Footer from '../Footer';
import Banks from './bankData/index';


const BankDetail2 = () => {
  const fakeTimeStampDelete = moment().format('lll');
  window.scrollTo(0, 0);

  const dummy = Banks.data;

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 imgContainer">
            <div className="groupImg">
              <img
                className="bankDetialImg"
                role="presentation"
                src={dummy[0].Images[0]}
              />
            </div>
          </div>
          <div className="col-md-6 groupInfo">
            <div className="groupDesc">
              <div className="groupName">
                <h3>{dummy[0].Name}</h3>
              </div>
              <div className="groupDesc">
                <h4>{dummy[0].Name} Details and Information: </h4>
                <p>{dummy[0].Description1}</p>
                <p>{dummy[0].Description2}</p>
                <p>{dummy[0].Description3}</p>
              </div>
              <div className="moniesDisplay">
                <div className="startingTotal">
                  <h6>Starting Amount:</h6>
                  <h4>{dummy[0].Starting}</h4>
                </div>
                <div className="currentTotal">
                  <h6>Currently Held:</h6>
                  <h4>{dummy[0].Current}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="groupDonateBtn">
          <button className="donateBtn">Add Funds to This Bank</button>
        </div>
        <div className="tableContainer">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Bank Member</th>
                <th>Date</th>
                <th>Borrowed Out</th>
                <th>Payed In</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Faith</td>
                <td>2016-02-21</td>
                <td>0.00</td>
                <td>12.78</td>
                <td>Repaid Loan</td>
              </tr>
              <tr>
                <td>Olive</td>
                <td>2016-02-21</td>
                <td>0.00</td>
                <td>19.00</td>
                <td>Repaid Loan</td>
              </tr>
              <tr>
                <td>Winnie</td>
                <td>2016-02-21</td>
                <td>16.75</td>
                <td>00.00</td>
                <td>For School Supplies</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>2016-02-21</td>
                <td>25.80</td>
                <td>0.00</td>
                <td>Medicine</td>
              </tr>
              <tr>
                <td>Damaris</td>
                <td>2016-02-21</td>
                <td>0.00</td>
                <td>12.78</td>
                <td>Repaid Loan</td>
              </tr>
              <tr>
                <td>Valentine</td>
                <td>2016-02-21</td>
                <td>32.15</td>
                <td>0.00</td>
                <td>Sanitary Supplies</td>
              </tr>
              <tr>
                <td>Florence</td>
                <td>2016-02-21</td>
                <td>15.20</td>
                <td>0.00</td>
                <td>Seeds and Equipment</td>
              </tr>
              <tr>
                <td>Loureen</td>
                <td>2016-02-21</td>
                <td>9.80</td>
                <td>0.00</td>
                <td>Material for crafts</td>
              </tr>
              <tr>
                <td>Nsulubi</td>
                <td>2016-02-21</td>
                <td>0.00</td>
                <td>27.00</td>
                <td>Repaid Loan</td>
              </tr>
              <tr>
                <td>Halima</td>
                <td>2016-02-21</td>
                <td>12.00</td>
                <td>0.00</td>
                <td>Text book for children</td>
              </tr>
              <tr>
                <td>Aisha</td>
                <td>2016-02-21</td>
                <td>0.00</td>
                <td>35.50</td>
                <td>Repaid Loan</td>
              </tr>
              <tr>
                <td>Kileen</td>
                <td>2016-02-21</td>
                <td>7.20</td>
                <td>0.00</td>
                <td>Transport to hospital</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="transactionHeader">
          <h3>Bank History & Notes to Sponsors</h3>
        </div>
        <div className="transactionHistoryContainer text-center">
          <div className="transactionItem">
            <h6>{String(' ')}</h6>
            <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
            <p>{('Halima\'s')} son started school with new books.</p>
            <hr className="bankHistoryHr" />
          </div>
          <div className="transactionItem">
            <h6>{String(' ')}</h6>
            <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
            <p>{'Olive\'s'} farm bought breeding pigs.</p>
            <hr className="bankHistoryHr" />
          </div>
          <div className="transactionItem">
            <h6>{String(' ')}</h6>
            <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
            <p>Florence bought supplies to increase productivity of chicken operation.</p>
            <hr className="bankHistoryHr" />
          </div>
          <div className="transactionItem">
            <h6>{String(' ')}</h6>
            <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
            <p>Olive is happy to have repaid her loan.</p>
            <hr className="bankHistoryHr" />
          </div>
          <div className="transactionItem">
            <br />
            <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
            <p>Kileen is recovering well in hospital.</p>
            <hr className="bankHistoryHr" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default BankDetail2;
