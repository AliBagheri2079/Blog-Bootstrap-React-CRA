import React from "react";

import ChevronCompact from "components/Buttons/ChevronCompact";
import Soundwave from "components/Logo/Soundwave";
import Placeholder from "components/Placeholder";
import Titles from "blocks/Titles";
import User from "blocks/User";

const Information = () => {
  const slidesRef = React.useRef(null);

  React.useEffect(() => {
    slidesRef.current = document.querySelector(".sliders__item");

    return () => {
      slidesRef.current = null;
    };
  }, []);

  const hanldeSlideImage = () => {
    const nextSlideElm = slidesRef.current.nextElementSibling;
    nextSlideElm.removeAttribute("transition-style");
    nextSlideElm.classList.toggle("sliders__item--active");

    if (nextSlideElm.classList.contains("sliders__item--active")) {
      nextSlideElm.setAttribute("transition-style", "in:custom:circle-swoop");
    }
  };

  return (
    <section className="information">
      <div className="information__item">
        <Titles
          topHeader="madigago"
          description={`
            Lorem ipsum dolor sit amet consectetur  adipisicing elit. Numquam
            illum, voluptas corporis dignissimos recusandae     quidem consectetur
            esse veniam aspernatur molestias!
          `}
        />

        <Soundwave />
      </div>

      <div className="information__item">
        <Placeholder />

        <div className="information__item__container">
          <User />

          <div>
            <ChevronCompact slideImage={hanldeSlideImage} />
            <ChevronCompact slideImage={hanldeSlideImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
