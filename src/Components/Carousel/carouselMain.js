import React from 'react';
import Carousel from 'react-bootstrap/lib';
import carouselStyle from './carouselStyles';

class CarouselMain extends React.PureComponent {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <h3 style={DonationPg.styles.h3Carousel}>Bank of Tanzania</h3>
          <img
            style={DonationPg.styles.imgCarousel}
            width={900}
            height={500}
            alt="900x500"
            src="./girl-469157.jpg"
          />
          <Carousel.Caption>
            <div style={DonationPg.styles.capContainCarousel}>
              <h3 style={DonationPg.styles.carouselH3}>Nulla Wambosi</h3>
              <p style={DonationPg.styles.pCarousel}>
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
