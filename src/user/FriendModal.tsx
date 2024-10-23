import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FriendCard from "./FriendCard";
import FriendSearchCard from "./FriendSearchCard";
import { FriendDetailType } from "types/users.type";

const FriendModal: React.FC<{
  friends: FriendDetailType[];
  show: boolean;
  handleClose: () => void;
}> = ({ friends, show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      style={{ height: "800px" }}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>검색 결과</Modal.Title>
      </Modal.Header>

      {friends.map((friend) => (
        <FriendSearchCard {...friend} key={friend.id} />
      ))}
    </Modal>
  );
};

export default FriendModal;
