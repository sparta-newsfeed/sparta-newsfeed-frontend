import styled from "@emotion/styled";
import ArticleTitle from "./ArticleTitle";
import CustomPagination from "pagination/CustomPagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { LOCAL_HOST } from "constants/constants";
import { ArticleTitleType } from "types/articles.type";
import { Button, Modal } from "react-bootstrap";

const Articles = () => {
  const [articles, setArticles] = useState<ArticleTitleType[]>([]);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [show, setShow] = useState(false);
  const [article, setArticle] = useState({
    title: "",
    body: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getArticles();
  }, [page]);

  const getArticles = async () => {
    const response = await axios.get(
      LOCAL_HOST + `/api/articles?page=${page}`,
      {
        withCredentials: true,
      }
    );
    setArticles(response.data.content);
    setMaxPage(response.data.page.totalPages);
    console.log(response);
  };

  const handleFormChanger = (event: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = event.target as HTMLFormElement;
    setArticle((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleArticlePost = async () => {
    console.log(article);
    const response = await axios.post(
      LOCAL_HOST + `/api/articles`,
      JSON.stringify(article),
      {
        headers: {
          "Content-Type": `application/json`,
        },
        withCredentials: true,
      }
    );

    console.log(response);

    window.location.reload();
  };
  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>게시물 작성</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onChange={handleFormChanger} onSubmit={handleArticlePost}>
            <label className="form-label">제목</label>
            <div
              style={{
                width: "100%",
              }}
            >
              <input
                type="text"
                className="form-control"
                name="title"
                id="inputAddress2"
                placeholder="title..."
              />
            </div>
            <label className="form-label mt-3">내용</label>
            <div
              style={{
                width: "100%",
              }}
            >
              <textarea
                className="form-control"
                name="body"
                id="inputAddress2"
                placeholder="title..."
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" type="button" onClick={handleArticlePost}>
            저장
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="p-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">전체 글 보기</h1>
          <p className="col-md-8 fs-4">친구들의 최신 소식을 확인해봅시다.</p>
        </div>
      </div>
      <ArticleListWrapper>
        {articles.map((article) => (
          <ArticleTitle {...article} key={article.id} />
        ))}
      </ArticleListWrapper>
      <div className="col-12 mt-3">
        <Button onClick={handleShow}>글 쓰기</Button>
      </div>
      <PaginationWrapper>
        <CustomPagination page={page} maxPage={maxPage} setPage={setPage} />
      </PaginationWrapper>
    </Container>
  );
};

export default Articles;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const ArticleListWrapper = styled.div`
  margin-top: 30px;
  height: 300px;
  overflow: scroll;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
