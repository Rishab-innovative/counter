import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface ModalProps {
  openModal: boolean;
  onHide: () => void;
  counter: number;
  onStart: () => void;
  onStop: () => void;
  startButton: boolean;
  stopButton: boolean;
}

const Newmodal: React.FC<ModalProps> = ({
  openModal,
  onHide,
  counter,
  onStart,
  onStop,
  startButton,
  stopButton,
}) => {
  return (
    <Modal show={openModal} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>COUNTER</Modal.Title>
      </Modal.Header>
      <Modal.Body>{counter}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" className="btn-grad1" onClick={onHide}>
          CLOSE
        </Button>
        <Button
          variant="primary"
          className={startButton ? "btn-grad1" : "btn-grad2"}
          onClick={onStart}
        >
          START
        </Button>
        <Button
          variant="primary"
          className={stopButton ? "btn-grad1" : "btn-grad2"}
          onClick={onStop}
        >
          STOP
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Newmodal;
