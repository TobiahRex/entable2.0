import React, { PropTypes } from 'react';
import Carousel from 'react-bootstrap/lib';
import styles from './carouselStyles';

class CarouselMain extends React.PureComponent {
  static propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.any),
  }
  renderCarousel = () => {
    this.props.transactions.map((trans, i) => (
      <Carousel.Item key={`carousel${i}`}>
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
      <Carousel>
        <Carousel.Item>
          <h3 style={styles.h3Carousel}>Bank of Tanzania</h3>
          <img
            style={styles.imgCarousel}
            width={900}
            height={500}
            alt="900x500"
            src="./girl-469157.jpg"
          />
          <Carousel.Caption>
            <div style={styles.capContainCarousel}>
              <h3 style={styles.carouselH3}>Nulla Wambosi</h3>
              <p style={styles.pCarousel}>
                Nulla purchased fresh meat and produce for her family with 3500 MPESA on October 21nd, 2016.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default CarouselMain;
