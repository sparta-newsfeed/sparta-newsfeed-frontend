import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import "./article-detail.css";
import Comment from "comment/Comment";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LOCAL_HOST } from "constants/constants";
import { ArticleDetailType } from "types/articles.type";
import { CommentType } from "types/comments.type";
import { Button } from "react-bootstrap";
import CustomPagination from "pagination/CustomPagination";

const ArticleDetail = () => {
  const param = useParams();
  const [detail, setDetail] = useState<ArticleDetailType>();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [commentBody, setCommentBody] = useState({
    body: "",
  });
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [totalCommentCount, setTotalCommentCount] = useState(0);

  console.log(param.id);

  useEffect(() => {
    getArticleDetail();
  }, []);

  useEffect(() => {
    getComments(); // 페이지가 바뀔 때 댓글을 다시 가져옴
  }, [page]);

  const getComments = async () => {
    const commentResponse = await axios.get(
      LOCAL_HOST + `/api/articles/${param.id}/comment?page=${page}`,
      {
        withCredentials: true,
      }
    );

    console.log(commentResponse);
    setComments(commentResponse.data.content);
    setMaxPage(commentResponse.data.page.totalPages);
    setTotalCommentCount(commentResponse.data.page.totalElements);
  };

  const handleFormChanger = (event: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = event.target as HTMLFormElement;
    setCommentBody((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const getArticleDetail = async () => {
    const response = await axios.get(LOCAL_HOST + `/api/articles/${param.id}`, {
      withCredentials: true,
    });

    const commentResponse = await axios.get(
      LOCAL_HOST + `/api/articles/${param.id}/comment?page=${page}`,
      {
        withCredentials: true,
      }
    );

    console.log(response);
    console.log(commentResponse);
    const { author, body, id, liked, title, updatedAt } = response.data;
    setDetail({ author, body, id, liked, title, updatedAt });
    setComments(commentResponse.data.content);
    setPage(commentResponse.data.page.number);
    setMaxPage(commentResponse.data.page.totalPages);
    setTotalCommentCount(commentResponse.data.page.totalElements);
  };

  const dateFormat = (stringDate: string) => {
    const year = new Date(stringDate).getFullYear();
    const month = new Date(stringDate).getMonth() + 1;
    const date = new Date(stringDate).getDate();
    return `${year}-${month}-${date}`;
  };

  const handleCommentLike = async () => {
    const response = await axios.post(
      LOCAL_HOST + `/api/articles/${param.id}/like`,
      null,
      {
        withCredentials: true,
      }
    );

    window.location.reload();
  };

  const handleCommentPost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(commentBody);
    const response = await axios.post(
      LOCAL_HOST + `/api/articles/${param.id}/comment`,
      JSON.stringify(commentBody),
      {
        headers: {
          "Content-Type": `application/json`,
        },
        withCredentials: true,
      }
    );

    window.location.reload();
  };

  if (detail === undefined) return <></>;
  return (
    <Container className="blog-single gray-bg">
      <div className="col-lg-8 m-15px-tb">
        <article className="article">
          <div className="article-title">
            <h2>{detail.title}</h2>
            <div className="media">
              <div className="media-body">
                <label style={{ width: "65%" }}>
                  작성자 : {detail.author.name}
                </label>
                <span style={{ width: "25%" }}>
                  수정일 : {dateFormat(detail.updatedAt)}
                </span>
                <Button
                  variant={detail.liked ? "primary" : "outline-primary"}
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
              </div>
            </div>
          </div>
          <div className="article-content">
            <p>{detail.body}</p>
          </div>
        </article>
        <div style={{ height: "400px", overflow: "scroll" }}>
          <TotalCommentCount>댓글 수 : {totalCommentCount}</TotalCommentCount>
          {comments.map((comment) => (
            <Comment {...comment} key={comment.id} />
          ))}
        </div>
        <div className="col-12" style={{ marginTop: "15px" }}>
          <CustomPagination page={page} maxPage={maxPage} setPage={setPage} />
        </div>
        <form onChange={handleFormChanger} onSubmit={handleCommentPost}>
          <label className="form-label">댓글 작성</label>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <input
              style={{ width: "80%" }}
              type="text"
              className="form-control"
              name="body"
              id="inputAddress2"
              placeholder="Comment..."
            />
            <div>
              <button type="submit" className="btn btn-primary">
                작성
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ArticleDetail;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: scroll;
`;

const TotalCommentCount = styled.p`
  width: 100%;
  font-weight: bold;
  padding-left: 5px;
`;
