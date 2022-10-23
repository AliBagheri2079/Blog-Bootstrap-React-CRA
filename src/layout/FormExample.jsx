import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";

import CustomFormGroup from "../components/CustomFormGroup";

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 justify-content-center">
        <CustomFormGroup
          md={6}
          lg={4}
          formGroupId="validationFullName"
          formLabelId="name"
          formLabel="Full Name"
          formControlType="text"
          formControlPlaceholder="full name"
          formFeedbackValid="Looks good!"
          formFeedbackInvalid="Please choose a "
        />
        <CustomFormGroup
          md={6}
          lg={4}
          formGroupId="validationEmail"
          formLabelId="email"
          formLabel="Email"
          formControlType="email"
          formControlPlaceholder="name@example.com"
          formFeedbackValid="Looks good!"
          formFeedbackInvalid="Please choose a "
        />
        <CustomFormGroup
          md={6}
          lg={4}
          formGroupId="validationPassword"
          formLabelId="password"
          formLabel="Password"
          formControlType="password"
          formControlPlaceholder="password"
          formControlMinlenght={4}
          formControlMaxlenght={12}
          formFeedbackValid="Looks good!"
          formFeedbackInvalid="Please choose a "
        />
      </Row>

      <Row className="mb-3 justify-content-center">
        <CustomFormGroup
          md={3}
          lg={5}
          formGroupId="validationPhoneNumber"
          formLabelId="phoneNumber"
          formLabel="Phone Number"
          formControlType="number"
          formControlPlaceholder="phone number"
          formControlMinlenght={8}
          formControlMaxlenght={16}
          formFeedbackValid="Looks good!"
          formFeedbackInvalid="Please choose a "
        />
        <CustomFormGroup
          md={4}
          lg={2}
          formGroupId="validationCity"
          formLabelId="city"
          formLabel="City"
          formControlType="text"
          formControlPlaceholder="city"
          formFeedbackValid="Looks good!"
          formFeedbackInvalid="Please choose a "
        />
        <CustomFormGroup
          md={5}
          formGroupId="validationZip"
          formLabelId="zip"
          formLabel="Zip"
          formControlType="text"
          formControlPlaceholder="zip"
          formFeedbackValid="Looks good!"
          formFeedbackInvalid="Please choose a "
        />
      </Row>

      <Row className="mb-3 justify-content-center">
        <CustomFormGroup
          formGroupId="validationComments"
          formLabelId="Comments"
          formLabel="Write a comment here"
          formControlAsType="textarea"
          formControlPlaceholder="comments"
          formControlStyle={{ height: "100px" }}
          formFeedbackValid="Looks good!"
          formFeedbackInvalid="Please "
        />
      </Row>

      <Form.Group className="mb-3 justify-content-center">
        <Form.Check
          required
          type="switch"
          id="custom-switch"
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
}

export default FormExample;
