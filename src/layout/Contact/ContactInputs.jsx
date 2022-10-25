import { useStyles, utilityStyles } from "assets/jss-style";

const ContactInputs = ({ children, ...props }) => {
  const { myContactItem, myContactForm, myContactFormItem } = useStyles(props);
  const { centerFlex } = utilityStyles();

  return (
    <div className={myContactItem}>
      <form
        className={`${myContactForm} ${centerFlex}`}
        action="/post.php"
        method="post"
      >
        <input
          className={myContactFormItem}
          type="text"
          placeholder="First Name"
        />
        <input
          className={myContactFormItem}
          type="text"
          placeholder="Last Name"
        />
        <button className={myContactFormItem} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactInputs;
