import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function WinLossModal(props) {
  return (
    <Modal id='modal-style' show={props.show} onHide={props.onHide}>
      <Modal.Body className='modal-bg'>
        <h4 className='text-center'>
          {props.win ? "You Won!" : props.loss ? "You Lost!" : ""}
        </h4>
      </Modal.Body>
      <Modal.Footer className='modal-bg'>
        <Button variant='success' className='btn-block' onClick={props.onClick}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
