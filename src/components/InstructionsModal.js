import React from "react";
import { Modal } from "react-bootstrap";

export default function InstructionsModal(props) {
  return (
    <Modal id='modal-style' show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to Clicky Game!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          The goal of this game is to click each unique picture once and only
          once!
        </p>
        <p>
          The 'Score' in the top right tells you how many images you have
          clicked correctly. Get them all and your 'Wins' will increase by 1.
          Guess wrong and your 'Losses' will increase by 1.
        </p>
      </Modal.Body>
    </Modal>
  );
}
