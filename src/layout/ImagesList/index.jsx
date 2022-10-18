import Image from "blocks/Card/Image";

import GirleandBird from "assets/images/GirleandBird.jpg";
import MonandGirle from "assets/images/MonandGirle.jpg";
import Philsof from "assets/images/Philsolf.jpg";

const ImagesList = () => {
  const imgLists = [
    {
      id: Math.random() * Math.random() ** 5,
      image: GirleandBird,
      category: "Girl",
      header: "beautiful girle #1",
    },
    {
      id: Math.random() * Math.random() ** 5,
      image: GirleandBird,
      category: "Girl",
      header: "beautiful girle #2",
    },
    {
      id: Math.random() * Math.random() ** 5,
      image: Philsof,
      category: "Girl",
      header: "beautiful girle #3",
    },
    {
      id: Math.random() * Math.random() ** 5,
      image: Philsof,
      category: "Girl",
      header: "beautiful girle #4",
    },
    {
      id: Math.random() * Math.random() ** 5,
      image: MonandGirle,
      category: "Mon",
      header: "beautiful man #5",
    },
    {
      id: Math.random() * Math.random() ** 5,
      image: MonandGirle,
      category: "Mon",
      header: "beautiful man #6",
    },
  ];

  return (
    <section className="images">
      <div className="images--wrapper">
        <div className="images__card">
          {imgLists.map(({ id, image, category, header }) => (
            <Image id={id} image={image} category={category} header={header} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImagesList;
