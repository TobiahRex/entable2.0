import React from 'react';

class FlexBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: '',
    };
  }

  render() {
    const style = {
      parent: {
        margin: 30,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: 'lightcoral',
        //
        height: '200px',
        display: 'flex',
      },
      item: {
        height: '50px',
        margin: 5,
        background: 'DeepSkyBlue',
        color: 'black',
        textAlign: 'center',
        lineHeight: '50px',
        fontWeight: 600,
        width: 350,
      },
      itemOrder: {
        alignSelf: 'flex-end',
      },
    };

    return (
      <div >
        <h2>Display: Flex</h2>
        <div style={style.parent}>
          <div style={style.item}>1</div>
          <div style={{ ...style.item, ...style.itemOrder }}>2</div>
          <div style={style.item}>3</div>
          <div style={style.item}>4</div>
          <div style={style.item}>5</div>
        </div>
      </div>
    );
  }
}
export default FlexBox;
