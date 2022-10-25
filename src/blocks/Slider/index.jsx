import React from "react";
import PropTypes from "prop-types";

const Slider = ({ images }) => {
  return (
    <section className="header__slider">
      <div className="sliders sliders--container">
        {images.map(({ id, image }) => (
          <img
            key={id}
            src={image}
            alt={image}
            className="sliders__item"
            transition-style="in:custom:circle-swoop"
          />
        ))}
      </div>
    </section>
  );
};

Slider.propTypes = {
  images: PropTypes.array,
};

export default Slider;
