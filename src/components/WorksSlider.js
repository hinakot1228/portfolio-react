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
        height: 300,
        color: "#fff",
        background: "#3ab60b"
    };  
    return (
        <>
          <div className='slider-container'>
            <Slider {...settings}>
                <div>
                  <img src={`${process.env.PUBLIC_URL}/website-1.png`} style={style}></img>
                </div>
                <div>
                  <img src={`${process.env.PUBLIC_URL}/webapp-1.png`} style={style}></img>
                </div>
                <div>
                  <img src={`${process.env.PUBLIC_URL}/website-2.png`} style={style}></img>
                </div>
                <div>
                  <img src={`${process.env.PUBLIC_URL}/webapp-2.png`} style={style}></img>
                </div>
                 
            </Slider>
        </div>
      </>
    );
  }
 
  export default SimpleSlider;