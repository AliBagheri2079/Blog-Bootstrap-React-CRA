import React from "react";

import ContactWrapper from "./ContactWrapper";
import ContactTitles from "./ContactTitles";
import ContactInputs from "./ContactInputs";

const Contact = () => (
  <ContactWrapper>
    <ContactTitles itemHeight="100%" />
    <ContactInputs itemHeight="80%" />
  </ContactWrapper>
);
export default Contact;
