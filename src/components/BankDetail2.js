import React, { Component } from 'react';
// import BankStore from '../stores/BankStore';
import moment from 'moment'
import Footer from './Footer'


export default class BankDetail2 extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     banks: BankStore.getBanks(),
  //   };
  // }
  //
  // componentWillMount() {
  //   BankStore.startListening(this._onChange);
  // }
  //
  // componentWillUnmount() {
  //   BankStore.stopListening(this._onChange);
  // }
  //
  // _onChange = () => {
  //   this.setState({ banks: BankStore.getBanks() });
  // }


  render() {
      let fakeTimeStampDelete = moment().format('lll')

       this.document.window.scrollTo(0, 0);

      let dummy = [

          {Name: 'Bank of Sauri',
          Country: 'Kenya',
          Description1: 'Located in western Kenya, the Sauri cluster lies in Yala Division, Siaya District, Nyanza Province.',
          Description2: 'In Sauri, almost 80% of the population earned less than $1 per day, and 59% of children under five exhibited stunting, a sign of chronic malnutrition.',
          Description3: 'The bank aims to alleviate these issues and develop the local economy.',
          Images: ['sauri-kenya-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/sauri-kenya-feature.jpg'],
          Starting: '$350',
          Current: '$1050'},

          {Name: 'Dertu Village Bank',
          Country: 'Kenya',
          Description1: 'The village of Dertu is located in northeastern Kenya, approximately 140km from the border with Somalia.',
          Description2: 'The village is characterized by high poverty levels and for years there has been a high level of dependency on food aid.',
          Description3: 'The bank hopes to reduce poverty and develop education in the area.',
          Images: ['dertu-kenya-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/dertu-kenya-feature.jpg'],
          Starting: '$425',
          Current: '$870'},

          {Name: 'Koraro Bank',
          Country: 'Ethiopia',
          Description1: 'The Koraro cluster is located in the Hawzien district in northern Ethiopia.',
          Description2: 'Koraro is located in one of the poorest regions of Ethiopia, suffers from a severely degraded soil, high malaria and maternal mortality rates, lack of classrooms, unsafe drinking water, and extremely poor infrastructure.',
          Description3: 'The first priority of the bank is to focus on basic health and sanitation isssues.',
          Images: ['koraro-ethiopia-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/koraro-ethiopia-feature.jpg'],
          Starting: '$260',
          Current: '$800'},

          {Name: 'Bank of Bonsaaso',
          Country: 'Ghana',
          Description1: 'Bonsaaso is located in the Amansie-West District of the Ashanti Region of Ghana.',
          Description2: 'Getting goods in and out of the isolated communities can be arduous due to travel on uneven dirt roads that were carved by gold mining and lumber companies years back.',
          Description3: 'The bank has been set up to focus initially on vital local infrastructure',
          Images: ['bonsaaso-ghana-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/bonsaaso-ghana-feature.jpg'],
          Starting: '$100',
          Current: '$550'},

          {Name: 'Mbola Village Bank',
          Country: 'Tanzania',
          Description1: 'The Mbola cluster is located in the Uyui district in mid-western Tanzania.',
          Description2: 'Mbola faces a high rate of environmental degradation resulting from poor crop management practices, declining agricultural production and destruction of the Miombo woodlands for fuel wood used in the tobacco industry.',
          Description3: 'Mbola Village Bank woul like to work on restoring the local environment and moving to a more sustainable economy.',
          Images: ['mbola-tanzania-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/mbola-tanzania-feature.jpg'],
          Starting: '$600',
          Current: '$1350'},

          {Name: 'Ruhiira Bank',
          Country: 'Uganda',
          Description1: 'The Ruhiira cluster lies in southwestern Uganda and is 40km from the nearest city, Mbarara.',
          Description2: 'High population density and continued growth rates have contributed to land shortages and degradation. The area is also well known for having the highest tuberculosis prevalence in southwestern Uganda.',
          Description3: 'We want to provide housing and reliable medical resources to the local community',
          Images: ['ruhiira-uganda-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/ruhiira-uganda-feature.jpg'],
          Starting: '$175',
          Current: '$960'},

        ];

    // let { banks } = this.state;
    // // let id = this.location.query.id;
    // let bankDetail;
    // if (banks) {
    //   bankDetail = banks.filter(bank => {
    //     return bank.id === id;
    //   });
    // } else {
    //   bankDetail = <div></div>;
    // }
        {/* <BankData bankDetail={bankDetail} />
          <FinancialHistory financialHistory={bankDetail.history} />
        <Timeline timeline={bankDetail.timeline} /> */}
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 imgContainer">
              <div className="groupImg">
                <img className="bankDetialImg" src={dummy[0].Images[0]}/>
              </div>
            </div>
            <div className="col-md-6 groupInfo">
              <div className='groupDesc'>
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
              <h6></h6>
              <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
              <p>Halima's son started school with new books.</p>
              <hr className="bankHistoryHr"/>
            </div>
            <div className="transactionItem">
              <h6></h6>
              <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
              <p>Olive's farm bought breeding pigs.</p>
              <hr className="bankHistoryHr"/>
            </div>
            <div className="transactionItem">
              <h6></h6>
              <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
              <p>Florence bought supplies to increase productivity of chicken operation.</p>
              <hr className="bankHistoryHr"/>
            </div>
            <div className="transactionItem">
              <h6></h6>
              <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
              <p>Olive is happy to have repaid her loan.</p>
              <hr className="bankHistoryHr"/>
            </div>
            <div className="transactionItem">
              <h6></h6>
              <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
              <p>Kileen is recovering well in hospital.</p>
              <hr className="bankHistoryHr"/>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    )
  }
}
