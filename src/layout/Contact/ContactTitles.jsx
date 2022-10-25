import { useStyles } from "assets/jss-style";

const ContactTitles = ({ ...props }) => {
  const { myContactItem, myContactTitle } = useStyles(props);

  return (
    <div className={`${myContactItem} ${myContactTitle}`}>
      <h2 className="contact-title" lang="fr">
        Ce&shy;paragraphe est&shy;défini en&shy;français
      </h2>

      <p className="contact-description" contentEditable="true">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor tempore
        unde reiciendis doloribus ipsum magni eius eos placeat eveniet, alias
        quisquam exercitationem fugit, inventore provident similique repellendus
        odit debitis.
      </p>
    </div>
  );
};

export default ContactTitles;
