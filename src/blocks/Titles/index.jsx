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

export default Titles;
