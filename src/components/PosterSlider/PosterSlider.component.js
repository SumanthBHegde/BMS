import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/poster.component";

const PosterSlider = (props) => {
  const { posters, title, subtitle, isDark, config } = props;

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="flex flex-col items-start py-4">
    <h3 className={
`text-2xl font-bold ${
  props.isDark ? "text-white" : "text-gray-800"
}`
    }>{props.title}</h3>
    <p className={
`text-sm ${
  props.isDark ? "text-white" : "text-gray-800"
}`
    }>{props.subtitle}</p>
    </div>
    <Slider {...settings}>
    {props.images.map((image)=> (
      <Poster {...image} isDark={props.isDark} />
    ))}
    </Slider>
    </>
  )
}

export default PosterSlider;
