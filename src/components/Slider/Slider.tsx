import React from 'react'
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {swiperSlide1} from '../../data'

const Slider = () => {
  console.log("swiperSlide1",swiperSlide1)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
    <div className="carousel" style={{ margin: '0 10px' }}>
      <h1 className="text-center ff-bold font-36 mt-3 mb-4">Slider </h1>
      {/* <Carousel responsive={responsive}>
      {swiperSlide1.map((imageUrl, index) => {
          return (
            <div className="slider" key={index} 
            style={{
              margin:"0 10px",
              overflow:"hidden",
              padding:"1rem 0"
            }}>
              <img src={imageUrl.img} 
              className="w-100 offer_img_slide"
                  />
            </div>
          );
        })}
      </Carousel> */}

    </div>
    </>
  )
}

export default Slider
