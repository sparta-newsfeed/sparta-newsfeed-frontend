import { Badge, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArticleTitleType } from "../types/articles.type";

const ArticleTitle: React.FC<ArticleTitleType> = ({
  id,
  title,
  author,
  updatedAt,
  commentCounts,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/articles/${id}`);
  };

  const dateFormat = (stringDate: string) => {
    const year = new Date(stringDate).getFullYear();
    const month = new Date(stringDate).getMonth() + 1;
    const date = new Date(stringDate).getDate();
    return `${year}-${month}-${date}`;
  };

  return (
    <ListGroup>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        onClick={() => handleNavigate()}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{title}</div>
          {author.name}
        </div>
        <div className="me-3 fw-bold">{dateFormat(updatedAt)}</div>
        <Badge bg="primary" pill>
          댓글 수 : {commentCounts}
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ArticleTitle;
