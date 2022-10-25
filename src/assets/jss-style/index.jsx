import { createUseStyles } from "react-jss";

// create utility classes
export const utilityStyles = createUseStyles({
  centerFlex: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});

// add all css component to useStyles
export const useStyles = createUseStyles({
  myContact: {
    // height: (props) => props.parentHeight,
    height: "50vh",
  },
  myContactItem: (props) => ({
    height: props.itemHeight,
    //  the width will be at least 300px, but will be wider if the viewport is more than 100 * 10px = 1000px wide
    flex: "max(30vw, 300px)",
    padding: {
      right: "3rem",
      left: "3rem",
    },
  }),
  myContactTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "2rem",

    "& .contact-title": {
      fontSize: "2.2rem",
      fontWeight: "normal",
    },

    "& .contact-description": {
      fontSize: "1rem",
      color: "gray",
    },
  },
  myContactForm: {
    height: "100%",
    gap: "0.5rem",
    "& input": {
      paddingInlineStart: "1rem",
    },
  },
  myContactFormItem: {
    flex: "clamp(150px, 20vw, 300px)",
    backgroundColor: "lightgray",
    height: "2.5rem",
    border: "unset",
    borderRadius: "10px",

    "&:focus-visible": {
      outline: "1px solid lightgray",
      outlineOffset: "4px",
    },
  },
});
