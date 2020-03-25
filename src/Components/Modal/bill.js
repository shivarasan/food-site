import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Bill = ({ isBillVisible, handleClose }) => {
  return (
    <>
      <Modal show={isBillVisible} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your bill € 3.00</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Bill;
