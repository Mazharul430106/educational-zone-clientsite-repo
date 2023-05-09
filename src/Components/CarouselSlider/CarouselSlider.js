import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';

const slideItems = [
    {
        "img": "https://i.ibb.co/jTZ81Mx/slide1.jpg",
        "title": "Creative Thinking & Innovation",
        "desc": "Proactively utilize open-source users for process-centric total linkage Energistically reinvent web-enabled initiatives with premium processes. Proactively drive.",
    },

    {
        "img": "https://i.ibb.co/1X6m5Zq/slide2.jpg",
        "title": "On Line Learning Process",
        "desc": "Proactively utilize open-source users for process-centric total linkage Energistically reinvent web-enabled initiatives with premium processes. Proactively drive.",
    },
    {
        "img": "https://i.ibb.co/FW127Jw/slide3.jpg",
        "title": "Off Line Learning Process",
        "desc": "Proactively utilize open-source users for process-centric total linkage Energistically reinvent web-enabled initiatives with premium processes. Proactively drive.",
    },

]

const CarouselSlider = () => {
    return (

        <Carousel>
            {
                slideItems.map(item => <CarouselItem >
                    <img
                        className="d-block w-100"
                        src={item.img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <h3 className='fs-1'>{item.title}</h3>
                            <p className='fs-5'>{item.desc}</p>
                        </div>

                    </Carousel.Caption>

                </CarouselItem>)
            }
        </Carousel>

    );
};

export default CarouselSlider;