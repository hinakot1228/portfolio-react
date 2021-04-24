import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './WorksSlider.css';

const SimpleSlider = () =>  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      centerMode: true,
      centerPadding: '25%',
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 940,
          settings: {
            centerMode: false,
            arrows: false,
          }
        }
      ]
    };
    const style = {
        margin: 20,
        height: 200,
        color: "#fff",
        background: "#3ab60b"
    };  
    return (
        <>
          <div className='slider-container'>
            <Slider {...settings}>
                <div>
                <h1 style={style}>1</h1>
                </div>
                <div>
                <h1 style={style}>2</h1>
                </div>
                <div>
                <h1 style={style}>3</h1>
                </div>
                <div>
                <h1 style={style}>4</h1>
                </div>
                <div>
                <h1 style={style}>5</h1>
                </div>        
            </Slider>
        </div>
      </>
    );
  }
 
  export default SimpleSlider;