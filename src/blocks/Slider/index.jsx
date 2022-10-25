import React from "react";
import FocuslyMan from "assets/images/FocuslyMan.jpg";
import PokerfaceMan from "assets/images/PokerfaceMan.jpg";

const Slider = () => {
  const images = [
    { id: 1, image: FocuslyMan },
    { id: 2, image: PokerfaceMan },
  ];

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

export default Slider;
