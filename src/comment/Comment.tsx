import styled from "@emotion/styled";
import { Badge, ListGroup } from "react-bootstrap";
import { CommentType } from "types/comments.type";

const Comment: React.FC<CommentType> = ({
  body,
  author,
  lastUpdatedAt,
  likeCount,
}) => {
  return (
    <ListGroup style={{ height: "150px", overflow: "scroll" }}>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div
            className="fw-bold"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {author}
            <span className="me-3">{lastUpdatedAt}</span>
          </div>
          {body}
        </div>
        <BadgeWrapper>
          <Badge bg="primary" pill>
            추천 : {likeCount}
          </Badge>
        </BadgeWrapper>
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
