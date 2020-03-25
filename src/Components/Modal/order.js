import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Order = ({ isOrderVisible, handleConfirmOrder, handleCloseOrder }) => {
  const handleClose = () => handleCloseOrder();
  const handleConfirm = () => handleConfirmOrder();

  return (
    <>
      <Modal show={isOrderVisible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Food Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have seleted three dishes
          <ol>
            <li>Tapas con bacalao</li>
            <li>Tapas con pulpo</li>
            <li>Tapas con ensaladia rusa</li>
          </ol>
          Cash upon delivery
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleConfirm}>
            proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Order;
