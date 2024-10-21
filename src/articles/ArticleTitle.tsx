import { Badge, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArticleTitleType } from "../types/articles.type";

const ArticleTitle: React.FC<ArticleTitleType> = ({
  id,
  title,
  author,
  lastUpdatedAt,
  likeCount,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/articles/${id}`);
  };

  return (
    <ListGroup>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        onClick={() => handleNavigate(id)}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{title}</div>
          {author}
        </div>
        <div className="me-3 fw-bold">{lastUpdatedAt}</div>
        <Badge bg="primary" pill>
          추천 : {likeCount}
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ArticleTitle;
