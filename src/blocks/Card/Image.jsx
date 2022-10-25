import React from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Image = ({ id, image, category, header }) => {
  gsap.registerPlugin(ScrollTrigger);
  // create a ref for the root level element (for scoping)
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    const element = cardRef.current;

    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      // add timeline for cleaner gsap setup
      let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: element.querySelector(".card--scroll"),
          // toggle places - onEnter, onLeave, onEnterBack, and onLeaveBack, in that order.
          toggleActions: "restart none none none",
        },
      });

      // all our animations can use selector text like ".card__background--animate"
      // and it's properly scoped to our component
      tl.fromTo(
        element.querySelector(".card__background--animate"),
        {
          x: -100,
        },
        {
          x: 0,
          duration: 1.5,
          ease: "back.out(1)",
        }
      ).fromTo(
        element.querySelector(".card__content--animate"),
        {
          scale: 0.6,
        },
        {
          scale: 1,
          duration: 2,
          ease: "back.out(1.7)",
        }
      );
    }, cardRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div key={id} className="card card--scroll" ref={cardRef}>
      <div
        className="card__background card__background--animate"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card__content card__content--animate">
        <p className="card__category">{category}</p>
        <h2 className="card__heading">{header}</h2>
      </div>
    </div>
  );
};

Image.propTypes = {
  id: PropTypes.number,
  image: PropTypes.elementType,
  category: PropTypes.string,
  header: PropTypes.string,
};

export default Image;
