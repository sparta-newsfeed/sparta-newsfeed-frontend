import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FriendCard from "./FriendCard";
import FriendSearchCard from "./FriendSearchCard";

const FriendModal: React.FC<{
  userName: string | null;
  show: boolean;
  handleClose: () => void;
}> = ({ userName, show, handleClose }) => {
  const mockFriends = [
    {
      id: 1,
      name: "김완영",
      email: "dhks2869@gmail.com",
      nickname: "kimwanyoung",
    },
    {
      id: 1,
      name: "김완영",
      email: "dhks2869@gmail.com",
      nickname: "kimwanyoung",
    },
    {
      id: 1,
      name: "김완영",
      email: "dhks2869@gmail.com",
      nickname: "kimwanyoung",
    },
    {
      id: 1,
      name: "김완영",
      email: "dhks2869@gmail.com",
      nickname: "kimwanyoung",
    },
  ];
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

      {mockFriends.map((friend) => (
        <FriendSearchCard {...friend} />
      ))}
    </Modal>
  );
};

export default FriendModal;
