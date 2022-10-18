import FocuslyMan from "assets/images/FocuslyMan.jpg";
import PokerfaceMan from "assets/images/PokerfaceMan.jpg";

const Slider = ({ image }) => {
  return (
    <section className="header__slider">
      <div className="sliders sliders--container">
        <img className="sliders__item" src={PokerfaceMan} alt={FocuslyMan} />
      </div>
    </section>
  );
};

export default Slider;
