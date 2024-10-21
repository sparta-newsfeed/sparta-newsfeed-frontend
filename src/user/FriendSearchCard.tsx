import { Button, Modal } from "react-bootstrap";
import { FriendDetailType } from "types/users.type";

const FriendSearchCard: React.FC<FriendDetailType> = ({
  id,
  name,
  nickname,
  email,
}) => {
  return (
    <Modal.Dialog style={{ width: "90%" }} key={id}>
      <Modal.Body>
        <p>이름 : {name}</p>
        <p>닉네임 : {nickname}</p>
        <p>이메일 : {email}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-primary">추가하기</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default FriendSearchCard;
