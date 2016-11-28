import React, { PropTypes } from 'react';
import Carousel from 'react-bootstrap/lib';
import styles from './carouselStyles';

class CarouselMain extends React.PureComponent {
  static propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object),
  }
  renderCarousel = () => {
    this.props.transactions.map((trans, i) => (
      <Carousel.Item key={`carousel-${i}`}>
        <h3 style={styles.h3Carousel}>{trans.bank}</h3>
        <img
          style={styles.imgCarousel}
          src={trans.image}
          alt="900x500"
          width={900}
          height={500}
        />
        <Carousel.Caption>
          <div style={styles.capContainCarousel}>
            <h3 style={styles.carouselH3}>{trans.name}</h3>
            <p style={styles.pCarousel}>
              {trans.description}
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  }

  render() {
    return (
      <span>
        {this.renderCarousel()}
      </span>
    );
  }
}
export default CarouselMain;
