const Image = ({ id, image, category, header }) => {
  return (
    <div key={id} className="card">
      <div
        className="card__background card__background--animate"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card__content">
        <p className="card__category">{category}</p>
        <h2 className="card__heading">{header}</h2>
      </div>
    </div>
  );
};

export default Image;
