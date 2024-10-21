import { Button, Modal } from "react-bootstrap";

const Cancellation = () => {
  return (
    <div
      style={{
        position: "initial",
        width: "100%",
        marginBottom: "5px",
        padding: "10px",
        border: "1px solid #DCDCDC",
      }}
    >
      <Modal.Dialog
        style={{
          display: "inline",
          width: "100%",
        }}
      >
        <Modal.Body>정말로 탈퇴 하시겠습니까?</Modal.Body>

        <Modal.Footer>
          <Button variant="outline-primary">회원탈퇴</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Cancellation;
