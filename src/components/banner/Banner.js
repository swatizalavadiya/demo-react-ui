import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import SocialLink from './SocialLink';
import FoodInfo from './FoodInfo';
import ImageSlider from './ImageSlider';
import './Banner.css';

const Banner = () => {
    return (
      <div className="banner">
        <Container fluid>
          <Row>
            <Col lg={1} className="px-0">
              <SocialLink />
            </Col>
            <Col lg={6}>
              <FoodInfo />
            </Col>
            <Col lg={5}>
              <ImageSlider />
            </Col>
          </Row>
        </Container>
      </div>
      )
  }

export default Banner;