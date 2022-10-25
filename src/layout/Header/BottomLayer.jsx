import Placeholder from "components/Placeholder/index.jsx";
import Slider from "blocks/Slider";

import FocuslyMan from "assets/images/FocuslyMan.jpg";
import PokerfaceMan from "assets/images/PokerfaceMan.jpg";

const HeaderBottomLayer = () => {
  const imageList = [
    { id: 1, image: FocuslyMan },
    { id: 2, image: PokerfaceMan },
  ];

  return (
    <div className="header header--bottom-layer">
      <Placeholder />

      <Slider images={imageList} />
    </div>
  );
};

export default HeaderBottomLayer;
