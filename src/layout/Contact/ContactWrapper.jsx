import { useStyles, utilityStyles } from "assets/jss-style";

const ContactWrapper = ({ children, ...props }) => {
  const { myContact } = useStyles(props);
  const { centerFlex } = utilityStyles();
  return <section className={`${myContact} ${centerFlex}`}>{children}</section>;
};

export default ContactWrapper;
