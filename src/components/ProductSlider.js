import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductSlider.css'; // Create this CSS file to style the product slider

const ProductSlider = () => {
  const [autoplay, setAutoplay] = useState(true); // State to manage autoplay
  const [slider, setSlider] = useState(null); // State to store the slider reference

  // Sample product data (you can fetch this data from an API)
  const products = [
    { id: 1, name: 'Product 1', image: '/src/assets/img-1.png' },
    { id: 2, name: 'Product 2', image: '/path/to/product2.jpg' },
    { id: 3, name: 'Product 3', image: '/path/to/product3.jpg' },
    { id: 4, name: 'Product 4', image: '/path/to/product4.jpg' },
    { id: 5, name: 'Product 5', image: '/path/to/product5.jpg' },
    // Add more products as needed
  ];

  // Settings for the react-slick slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of products per row
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: autoplay, // Enable or disable autoplay based on state
    autoplaySpeed: 3000, // Set the time interval between slides (in milliseconds)
  };

  // Function to pause autoplay when a user interacts with the slider
  const handleSliderInteraction = () => {
    if (autoplay) {
      setAutoplay(false);
    }
  };

  // Function to restart autoplay when the user stops interacting with the slider
  const handleSliderInteractionEnd = () => {
    if (!autoplay) {
      setAutoplay(true);
    }
  };

  // useEffect hook to update the slider reference
  useEffect(() => {
    if (slider) {
      slider.slickPlay();
    }
  }, [autoplay, slider]);

  return (
    <div
      className="product-slider-container"
      onMouseEnter={handleSliderInteraction}
      onMouseLeave={handleSliderInteractionEnd}
    >
      <Slider {...sliderSettings} ref={(s) => setSlider(s)}>
        {products.map((product) => (
          <div key={product.id} className="product-slide">
            <img src={product.image} alt={product.name} />
            <p className="product-name">{product.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;