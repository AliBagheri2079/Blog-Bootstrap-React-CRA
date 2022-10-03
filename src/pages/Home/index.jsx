// import FocuslyMan from "assets/images/FocuslyMan.jpg";
import PokerfaceMan from "assets/images/PokerfaceMan.jpg";

const Home = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="header header--main-parts">
          <header className="header__title">
            <div className="titles titles--container">
              <h1 className="titles__head">madigago</h1>
              <p className="titles__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                illum, voluptas corporis dignissimos recusandae quidem
                consectetur esse veniam aspernatur molestias!
              </p>
            </div>
          </header>

          <section className="header__slider">
            <div className="sliders sliders--container">
              <img
                className="sliders__item"
                src={PokerfaceMan}
                alt={`${PokerfaceMan}`}
              />
            </div>
          </section>
        </div>

        <div className="header header--over-parts"></div>
      </div>

      <div className="part-2">photo gallery</div>
      <div className="part-3">form + map</div>
      <div className="part-4">footer</div>
    </>
  );
};

export default Home;
