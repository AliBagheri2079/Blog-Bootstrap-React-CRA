import ChevronCompactLeft from "components/Buttons/ChevronCompactLeft";
import ChevronCompactRight from "components/Buttons/ChevronCompactRight";
import Soundwave from "components/Logo/Soundwave";
import Placeholder from "components/Placeholder/index.jsx";
import Titles from "blocks/Titles";
import User from "blocks/User";

const Information = () => {
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

          <div className="arrow-key">
            <ChevronCompactLeft />
            <ChevronCompactRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
