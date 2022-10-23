import React from "react";
import { Form, Col, FloatingLabel } from "react-bootstrap";

const CustomFormGroup = ({
  xs,
  sm,
  md,
  lg,
  xl,
  formGroupId,
  formLabelId,
  formLabel,
  formControlType,
  formControlAsType,
  formControlPlaceholder,
  formControlMinlenght,
  formControlMaxlenght,
  formControlStyle,
  formFeedbackValid,
  formFeedbackInvalid,
}) => {
  return (
    <Form.Group
      as={Col}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      controlId={formGroupId}
    >
      <FloatingLabel
        controlId={formLabelId}
        label={formLabel}
        hasvalidation="true"
      >
        <Form.Control
          required
          type={formControlType}
          as={formControlAsType}
          placeholder={formControlPlaceholder}
          minLength={formControlMinlenght}
          maxLength={formControlMaxlenght}
          style={formControlStyle}
        />

        <Form.Control.Feedback type="valid">
          {formFeedbackValid}
        </Form.Control.Feedback>

        <Form.Control.Feedback type="invalid">
          {formControlMinlenght || formControlMaxlenght
            ? `${formFeedbackInvalid} ${formControlMinlenght} min and ${formControlMaxlenght} max ${formLabel} Character`
            : `${formFeedbackInvalid + formLabel}`}
        </Form.Control.Feedback>
      </FloatingLabel>
    </Form.Group>
  );
};

export default CustomFormGroup;
