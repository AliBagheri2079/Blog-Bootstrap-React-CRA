import PropTypes from "prop-types";

const Titles = ({ topHeader, description }) => {
  return (
    <header className="title-wrapper">
      <div className="title">
        <h1 className="title__head">{topHeader}</h1>
        <p className="title__description">{description}</p>
      </div>
    </header>
  );
};

Titles.propTypes = {
  topHeader: PropTypes.string,
  describe: PropTypes.string,
};

export default Titles;
