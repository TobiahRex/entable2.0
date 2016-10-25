import React, { Component } from 'react';
// import BankStore from '../stores/BankStore';
// import BankActions from  '../actions/BankActions';
import { browserHistory } from 'react-router'

export default class Banks extends Component {
  constructor() {
    super();
    this.state = {
      banks: [{name: 'bank1', image: 'https://thumb9.shutterstock.com/display_pic_with_logo/305215/171884546/stock-photo-full-body-picture-of-four-casual-young-people-with-hands-folded-standing-on-white-background-and-171884546.jpg' },
      {name:'bank2', image:'http://thumb1.shutterstock.com/display_pic_with_logo/514156/338985098/stock-photo-full-length-portrait-of-creative-business-people-standing-with-manager-against-white-background-338985098.jpg' },
      {name:'bank3', image:'http://static1.squarespace.com/static/53d160c0e4b0a7476418e48f/t/53d161a7e4b0c0e2154c4367/1424185003020/?format=1500w'},
      {name:'bank4', image:'http://previews.123rf.com/images/justmeyo/justmeyo1010/justmeyo101000114/7913559-Business-people-group-with-problems-thinking-at-solutions-while-a-young-man-standing-in-front-of-cam-Stock-Photo.jpg' },
      {name:'bank5', image:'http://all4desktop.com/data_images/original/4240427-people.jpg' },
      {name:'bank6', image:'https://www.sadakafirm.com/wp-content/uploads/2015/02/8808947-sad-serious-five-business-people-standing-in-a-row-and-looking-at-camera-isolated-on-white-backgroun.jpg' }]
    };

    this.toBank = this.toBank.bind(this)
    this.toBank2 = this.toBank2.bind(this)
    this.toBank3 = this.toBank3.bind(this)
    this.toBank4 = this.toBank4.bind(this)
    this.toBank5 = this.toBank5.bind(this)
    this.toBank6 = this.toBank6.bind(this)
    this.toBank7 = this.toBank7.bind(this)
    this.toFund = this.toFund.bind(this)
  }

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

  toBank() {
    browserHistory.push('/bank')
  }

  toBank2() {
    browserHistory.push('/bank2')
  }
  toBank3() {
    browserHistory.push('/bank3')
  }
  toBank4() {
    browserHistory.push('/bank4')
  }
  toBank5() {
    browserHistory.push('/bank5')
  }
  toBank6() {
    browserHistory.push('/bank6')
  }
  toBank7() {
    browserHistory.push('/bank7')
  }

  toFund() {
    browserHistory.push('/donation')
  }

  render() {

    let dummy = [

        {Name: 'Bank of Sauri',
        Country: 'Kenya',
        Description1: 'Located in western Kenya, the Sauri cluster lies in Yala Division, Siaya District, Nyanza Province.',
        Description2: 'In Sauri, almost 80% of the population ...',
        // Description2: 'In Sauri, almost 80% of the population earned less than $1 per day, and 59% of children under five exhibited stunting, a sign of chronic malnutrition.',
        Description3: 'The bank aims to alleviate these issues and develop the local economy.',
        Images: ['sauri-kenya-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/sauri-kenya-feature.jpg'],
        Starting: '$350',
        Current: '$1050'},

        {Name: 'Dertu Village Bank',
        Country: 'Kenya',
        Description1: 'The village of Dertu is located in northeastern Kenya, approximately 140km from the border with Somalia.',
        Description2: 'The village is characterized ...',
        // Description2: 'The village is characterized by high poverty levels and for years there has been a high level of dependency on food aid.',
        Description3: 'The bank hopes to reduce poverty and develop education in the area.',
        Images: ['dertu-kenya-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/dertu-kenya-feature.jpg'],
        Starting: '$425',
        Current: '$870'},

        {Name: 'Koraro Bank',
        Country: 'Ethiopia',
        Description1: 'The Koraro cluster is located in the Hawzien district in northern Ethiopia.',
        Description2: 'Koraro is located in one of the poorest regions of Ethiopia, suffers ...',
        // Description2: 'Koraro is located in one of the poorest regions of Ethiopia, suffers from a severely degraded soil, high malaria and maternal mortality rates, lack of classrooms, unsafe drinking water, and extremely poor infrastructure.',
        Description3: 'The first priority of the bank is to focus on basic health and sanitation isssues.',
        Images: ['koraro-ethiopia-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/koraro-ethiopia-feature.jpg'],
        Starting: '$260',
        Current: '$800'},

        {Name: 'Bank of Bonsaaso',
        Country: 'Ghana',
        Description1: 'Bonsaaso is located in the Amansie-West District of the Ashanti Region of Ghana.',
        Description2: 'Getting goods in and out of the isolated communities can be ...',
        // Description2: 'Getting goods in and out of the isolated communities can be arduous due to travel on uneven dirt roads that were carved by gold mining and lumber companies years back.',
        Description3: 'The bank has been set up to focus initially on vital local infrastructure',
        Images: ['bonsaaso-ghana-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/bonsaaso-ghana-feature.jpg'],
        Starting: '$100',
        Current: '$550'},

        {Name: 'Mbola Village Bank',
        Country: 'Tanzania',
        Description1: 'The Mbola cluster is located in the Uyui district in mid-western Tanzania.',
        Description2: 'Mbola faces a high rate of environmental degradation resulting from ...',
        // Description2: 'Mbola faces a high rate of environmental degradation resulting from poor crop management practices, declining agricultural production and destruction of the Miombo woodlands for fuel wood used in the tobacco industry.',
        Description3: 'Mbola Village Bank woul like to work on restoring the local environment and moving to a more sustainable economy.',
        Images: ['mbola-tanzania-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/mbola-tanzania-feature.jpg'],
        Starting: '$600',
        Current: '$1350'},

        {Name: 'Ruhiira Bank',
        Country: 'Uganda',
        Description1: 'The Ruhiira cluster lies in southwestern Uganda and is 40km from the nearest city, Mbarara.',
        Description2: 'High population density and continued growth rates ...',
        // Description2: 'High population density and continued growth rates have contributed to land shortages and degradation. The area is also well known for having the highest tuberculosis prevalence in southwestern Uganda.',
        Description3: 'We want to provide housing and reliable medical resources to the local community',
        Images: ['ruhiira-uganda-feature.jpg','http://millenniumvillages.org/wp-content/uploads/2013/02/ruhiira-uganda-feature.jpg'],
        Starting: '$175',
        Current: '$960'},

      ];


    let { banks } = this.state;

    return (
      <div className="banksContainer">
        <div className="bankCallToAction">
          <h4>Entable is an SMS (Tropo) powered table banking platform that pairs under-served women without access to financial services to sponsors seeking complete transparency and direct impact.</h4>
        </div>
        <div className="row bankRows">
          <div className="container">
            {/*  MAP THIS  ENTIRE DIV TO GET A SINGLE BANK VIEW */}
            <div className="col-md-4 text-center bkMargin">
              <div className="bankSingleDisplay panel panel-default">
                <img className="bankImg" src={dummy[5].Images[0]} width="100%" height="80%"/>
                <div className="imgTxtContainer">
                </div>
                <div className="bankViewBtnDisplay">
                  <button className="bankViewBtn" onClick={this.toFund}>Fund Bank</button>
                  <button className="bankViewBtn" onClick={this.toBank}>View Bank</button>
                </div>
                <p className="bankViewDesc">{dummy[5].Description1} {dummy[5].Description2}</p>
              </div>
            </div>
            {/*  MAP THIS  ENTIRE DIV TO GET A SINGLE BANK VIEW */}
            <div className="col-md-4 text-center bkMargin">
              <div className="bankSingleDisplay panel panel-default">
                <img className="bankImg" src={dummy[0].Images[0]} width="100%" height="80%"/>
                <div className="imgTxtContainer">
                </div>
                <div className="bankViewBtnDisplay">
                  <button className="bankViewBtn" onClick={this.toFund}>Fund Bank</button>
                  <button className="bankViewBtn" onClick={this.toBank}>View Bank</button>
                </div>
                <p className="bankViewDesc">{dummy[0].Description1} {dummy[0].Description2}</p>
              </div>
            </div>
            {/*  MAP THIS  ENTIRE DIV TO GET A SINGLE BANK VIEW */}
            <div className="col-md-4 text-center bkMargin">
              <div className="bankSingleDisplay panel panel-default">
                <img className="bankImg" src={dummy[1].Images[0]} width="100%" height="80%"/>
                <div className="imgTxtContainer">
                </div>
                <div className="bankViewBtnDisplay">
                  <button className="bankViewBtn" onClick={this.toFund}>Fund Bank</button>
                  <button className="bankViewBtn" onClick={this.toBank}>View Bank</button>
                </div>
                <p className="bankViewDesc">{dummy[1].Description1} {dummy[1].Description2}</p>
              </div>
            </div>
            {/*  MAP THIS  ENTIRE DIV TO GET A SINGLE BANK VIEW */}
            <div className="col-md-4 text-center bkMargin">
              <div className="bankSingleDisplay panel panel-default">
                <img className="bankImg" src={dummy[2].Images[0]} width="100%" height="80%"/>
                <div className="imgTxtContainer">
                </div>
                <div className="bankViewBtnDisplay">
                  <button className="bankViewBtn" onClick={this.toFund}>Fund Bank</button>
                  <button className="bankViewBtn" onClick={this.toBank}>View Bank</button>
                </div>
                <p className="bankViewDesc">{dummy[2].Description1} {dummy[2].Description2}</p>
              </div>
            </div>
            {/*  MAP THIS  ENTIRE DIV TO GET A SINGLE BANK VIEW */}
            <div className="col-md-4 text-center bkMargin">
              <div className="bankSingleDisplay panel panel-default">
                <img className="bankImg" src={dummy[3].Images[0]} width="100%" height="80%"/>
                <div className="imgTxtContainer">
                </div>
                <div className="bankViewBtnDisplay">
                  <button className="bankViewBtn" onClick={this.toFund}>Fund Bank</button>
                  <button className="bankViewBtn" onClick={this.toBank}>View Bank</button>
                </div>
                <p className="bankViewDesc">{dummy[3].Description1} {dummy[3].Description2}</p>
              </div>
            </div>
            <div className="col-md-4 text-center bkMargin">
              <div className="bankSingleDisplay panel panel-default">
                <img className="bankImg" src={dummy[4].Images[0]} width="100%" height="80%"/>
                <div className="imgTxtContainer">
                </div>
                <div className="bankViewBtnDisplay">
                  <button className="bankViewBtn" onClick={this.toFund}>Fund Bank</button>
                  <button className="bankViewBtn" onClick={this.toBank}>View Bank</button>
                </div>
                <p className="bankViewDesc">{dummy[4].Description1} {dummy[4].Description2}</p>
              </div>
            </div>
          </div>
      </div>
      </div>
    )
  }
};
