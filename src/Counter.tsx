import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Newmodal from "./Newmodal";

const Counter: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const [id, setId] = useState<number | NodeJS.Timer>();
  const [startButton, setStartButton] = useState<boolean>(true);
  const [stopButton, setStopButton] = useState<boolean>(false);

  const start = () => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    setId(intervalId);
    setStartButton(!startButton);
    setStopButton(!stopButton);
  };
  const stop = () => {
    console.log(id);
    clearInterval(id);
    setStartButton(!startButton);
    setStopButton(!stopButton);
  };

  return (
    <div className="wrapper">
      <div className="modal-btn">
        <Button
          variant="primary"
          onClick={() => setOpenModal(true)}
          className="btn-grad"
        >
          Counter Modal
        </Button>
      </div>
      <Newmodal
        openModal={openModal}
        onHide={() => setOpenModal(false)}
        counter={counter}
        onStart={start}
        onStop={stop}
        startButton={startButton}
        stopButton={stopButton}
      />
    </div>
  );
};

export default Counter;
