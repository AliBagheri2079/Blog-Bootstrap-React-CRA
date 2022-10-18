import ImageController from "blocks/ImageController";
import Navbar from "layout/Navbar";
import Information from "layout/Information";

const HeaderTopLayer = () => {
  return (
    <div className="header header--top-layer">
      <div className="header__items">
        <Navbar />

        <ImageController count="2" />

        <Information />
      </div>
    </div>
  );
};

export default HeaderTopLayer;
