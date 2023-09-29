import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Counter: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const [id, setId] = useState<number | NodeJS.Timer>();
  const [check, setCheck] = useState<boolean>(true);
  const [check2, setCheck2] = useState<boolean>(false);

  const start = () => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    setId(intervalId);
    setCheck(!check);
    setCheck2(!check2);
  };
  const stop = () => {
    console.log(id);
    clearInterval(id);
    setCheck(!check);
    setCheck2(!check2);
  };
  return (
    <div className="con">
      <div className="modal-btn">
        <Button
          variant="primary"
          onClick={() => setShow(true)}
          className="btn-grad"
        >
          Counter Modal
        </Button>
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>COUNTER</Modal.Title>
        </Modal.Header>
        <Modal.Body>{counter}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btn-grad1"
            onClick={() => setShow(false)}
          >
            CLOSE
          </Button>
          <Button
            variant="primary"
            className={check ? "btn-grad1" : "btn-grad2"}
            onClick={start}
          >
            START
          </Button>
          <Button
            variant="primary"
            className={check2 ? "btn-grad1" : "btn-grad2"}
            onClick={stop}
          >
            STOP
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Counter;
