import styled from "@emotion/styled";
import axios from "axios";
import { LOCAL_HOST } from "constants/constants";
import { useState } from "react";
import { Badge, Button, ListGroup } from "react-bootstrap";
import { CommentType } from "types/comments.type";

const Comment: React.FC<CommentType> = ({
  id,
  body,
  nickname,
  updatedAt,
  liked,
}) => {
  const dateFormat = (stringDate: string) => {
    const year = new Date(stringDate).getFullYear();
    const month = new Date(stringDate).getMonth() + 1;
    const date = new Date(stringDate).getDate();
    return `${year}-${month}-${date}`;
  };

  const handleCommentLike = async () => {
    const response = await axios.post(
      LOCAL_HOST + `/api/comment/${id}/like`,
      null,
      {
        withCredentials: true,
      }
    );

    window.location.reload();
  };

  return (
    <ListGroup className="mb-3" style={{ overflow: "scroll" }}>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span className="me-3 fw-bold">{nickname}</span>
            <span className="me-3" style={{ fontSize: "small" }}>
              {dateFormat(updatedAt)}
            </span>
          </div>
          {body}
        </div>
        <Button
          variant={liked ? "primary" : "outline-primary"}
          style={{
            width: "60px",
            height: "30px",
            fontSize: "10px",
            fontWeight: "bold",
          }}
          onClick={handleCommentLike}
        >
          좋아요
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
};

const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  height: 100%;
`;

export default Comment;
