import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Thumbs, Controller } from 'swiper';
import foodplate1 from '../../assets/images/foodplate1.png';
import foodplate2 from '../../assets/images/foodplate2.png';
import foodplate4 from '../../assets/images/foodplate4.png';
import foodplate5 from '../../assets/images/foodplate5.png';
import 'swiper/swiper-bundle.css';
import './ImageSlider.css';


SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

const ImageSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState();
    const [controlledSwiper, setControlledSwiper] = useState(null);

    const slides = [];
    const imgSlides = [foodplate1, foodplate2, foodplate4, foodplate5];
    for(let i = 0; i < 4; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <img src={imgSlides[i]} />
            </SwiperSlide>
        )
    }
    const thumbs = [];
    const imgThumbs = [foodplate1, foodplate2, foodplate4, foodplate5]
    for(let i = 0; i < 4; i++) {
        thumbs.push(
            <SwiperSlide key={`thumbs-${i}`}>
                <img src={imgThumbs[i]} />
            </SwiperSlide>
        )
    }
    return (
        <div className="image-swiper">
            <Container fluid>
                <Row>
                    <Col xs={8} md={8}>
                    <Swiper 
                        id="main"  
                        navigation 
                        spaceBetween={0}
                        slidesPerView={1}
                        onInit={(swiper) => console.log('Swiper Initialized!', swiper)}
                        onSlideChange={(swiper) => console.log('Slide index change to:', swiper.activeIndex)}
                        onReachEnd={() => console.log('Swiper end reached')}
                        thumbs={{ swiper : thumbsSwiper }}
                        controller={{ control: controlledSwiper }}
                    >
                        {slides}
                    </Swiper>
                    </Col>
                    <Col xs={4} md={4}>
                        <Swiper 
                            id="thumbs" 
                            spaceBetween={5}
                            slidesPerView={3}
                            onSwiper={setThumbsSwiper}
                        >
                            {thumbs}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ImageSlider;