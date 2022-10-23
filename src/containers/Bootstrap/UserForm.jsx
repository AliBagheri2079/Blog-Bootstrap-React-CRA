import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FormExample from "../../layout/FormExample";
import "./UserForm.css";

const UserForm = () => {
  return (
    <>
      <Container className="mt-4">
        <FormExample />
      </Container>
    </>
  );
};

export default UserForm;
