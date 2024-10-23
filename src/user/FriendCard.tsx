import axios from "axios";
import { LOCAL_HOST } from "constants/constants";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FriendDetailType } from "types/users.type";

const FriendCard: React.FC<FriendDetailType> = ({
  id,
  name,
  nickname,
  email,
  type,
}) => {
  const handleAccept = async () => {
    const response = await axios.post(
      LOCAL_HOST + `/api/friends/response/${id}`,
      null
    );

    console.log(response);
    window.location.reload();
  };

  const handleDelete = async () => {
    const response = await axios.delete(LOCAL_HOST + `/api/friends/${id}`);

    console.log(response);
    window.location.reload();
  };

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
          <p>이름 : {name}</p>
          <p>이메일 : {email}</p>
        </Modal.Body>

        <Modal.Footer>
          {type === "wait" ? (
            <Button variant="outline-primary" onClick={handleAccept}>
              수락하기
            </Button>
          ) : (
            <Button variant="outline-primary" onClick={handleDelete}>
              삭제하기
            </Button>
          )}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default FriendCard;
