import ChevronBarRight from "assets/icons/chevron-bar-right.svg";

const ImageController = ({ count }) => {
  return (
    <div className="image-controller">
      {/* Image Slider Counter */}
      <div className="image-controller__counter">
        <img className="" src={ChevronBarRight} alt="Counter SVG Logo" />
        <span>{count}</span>
      </div>
      {/* Image Slider Caption */}
      <div className="image-controller__cite">
        <p>
          This images added from{" "}
          <cite href="https://dribbble.com/shots/3970709-Picless">
            Pinterest website
          </cite>{" "}
          at <time>15 Mehr</time>.
        </p>
      </div>
    </div>
  );
};

export default ImageController;
