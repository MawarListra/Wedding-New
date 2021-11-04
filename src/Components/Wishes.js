import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function Wishes() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1370,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const [rows, setData] = useState([]);
  const GetData = () => {
    axios
      .get("https://weddingsk.xyz/v1/Undangan/getall")
      .then((res) => {
        setData(res.data.data);
      });
  };
  useEffect(() => {
    GetData();
  }, [rows]);
  const renderWishesCard = () => {
    return rows.map((row) => {
      var temp = "card" + row.tempelate;
      // console.log(temp);
      return (
        <div key={row.id}>
          <div className={temp}>
            <div className="w-full h-full pt-14 pb-24 pl-10 pr-10 text-center">
              <h1 className="break-all font-sans text-2xl text-black">
                {row.name}
              </h1>
              <p className="break-all font-sansLight text-sm pt-2 text-black px-2">
                {row.message}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="sm:flex flex-col w-full h-full justify-center items-center py-8">
      <div className="flex flex-col w-full h-full justify-center items-center md:px-24">
        <text className="py-8 font-script text-xl md:text-4xl font-bold">
          Ucapan dan Doa Anda
        </text>
        <div className="w-full h-full">
          <Slider {...settings}>{renderWishesCard()}</Slider>
        </div>
      </div>
    </div>
  );
}

export default Wishes;
