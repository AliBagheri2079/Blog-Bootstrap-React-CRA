import React from "react";
import { Col, Row, Toast, ToastContainer } from "react-bootstrap";

function CustomToast({ showToast, setShowToast }) {
  const toggleShow = () => {
    setShowToast(!showToast);
  };

  return (
    <Row>
      <Col md={6} className="mb-2">
        <div aria-live="polite" aria-atomic="true">
          <ToastContainer position="bottom-end" className="p-3">
            <Toast show={showToast} onClose={toggleShow}>
              <Toast.Header>
                <img
                  src="http://placehold.jp/20x20.png"
                  className="rounded me-2"
                  alt="placeholder"
                />
                <strong className="me-auto">React Bootstrap</strong>
                <small>{new Date(Date.now()).toUTCString()}</small>
              </Toast.Header>
              <Toast.Body>Woohoo, you're complete this form!</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </Col>
    </Row>
  );
}

export default CustomToast;
