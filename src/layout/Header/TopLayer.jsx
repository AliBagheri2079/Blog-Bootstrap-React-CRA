import ImageController from "blocks/ImageController";
import Navbar from "layout/Navbar";
import Information from "layout/Information";

const HeaderTopLayer = () => {
  return (
    <div className="header header--top-layer">
      <div className="header__items">
        <Navbar />

        <ImageController />

        <Information />
      </div>
    </div>
  );
};

export default HeaderTopLayer;
