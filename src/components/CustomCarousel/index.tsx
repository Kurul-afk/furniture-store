import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { useProductContext } from "../../context/productContext";
import CustomCard from "../CustomCard";
import CarouselCard from "../CarouselCard";

const CustomCarousel = () => {
  const { products, getProducts } = useProductContext();

  const settings = {
    dots: true, // Показывать точки для навигации
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость анимации
    slidesToShow: 4, // Количество отображаемых слайдов
    slidesToScroll: 1, // Количество слайдов, переключаемых за раз
    autoplay: true,
    adaptiveHeight: true,
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Slider {...settings}>
      {products.map((item: any) => (
        <CarouselCard product={item} key={item.key} />
      ))}
    </Slider>
  );
};

export default CustomCarousel;
