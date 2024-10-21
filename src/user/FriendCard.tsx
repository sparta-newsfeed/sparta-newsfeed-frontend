import { Button, Modal } from "react-bootstrap";

const FriendCard = () => {
  return (
    <div
      style={{
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
        <Modal.Body>
          <p>이름 : 김완영</p>
          <p>이메일 : dhks2869@gmail.com</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-primary">삭제하기</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default FriendCard;
