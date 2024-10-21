import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import "./article-detail.css";
import Comment from "comment/Comment";

const ArticleDetail = () => {
  const param = useParams();

  const mockDetail = {
    id: 1,
    title: "Test title1",
    author: "author",
    lastUpdatedAt: "2024-10-11",
    likeCount: 20,
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit rerum iusto tempora porro sapiente quod nulla eligendi! Inventore officiis quia expedita reiciendis debitis incidunt officia ipsa nobis impedit! Cupiditate, quia.",
  };

  const mockComments = [];
  for (let i = 0; i < 5; i++) {
    mockComments.push({
      id: i,
      author: "kimwanyoung",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit rerum iusto tempora porro sapiente quod nulla eligendi! Inventore officiis quia expedita reiciendis debitis incidunt officia ipsa nobis impedit! Cupiditate,",
      lastUpdatedAt: "2024-10-12",
      likeCount: 5,
    });
  }

  return (
    <Container className="blog-single gray-bg">
      <div className="col-lg-8 m-15px-tb">
        <article className="article">
          <div className="article-title">
            <h2>{mockDetail.title}</h2>
            <div className="media">
              <div className="media-body">
                <label style={{ width: "65%" }}>
                  작성자 : {mockDetail.author}
                </label>
                <span style={{ width: "25%" }}>
                  수정일 : {mockDetail.lastUpdatedAt}
                </span>
                <span style={{ width: "10%" }}>
                  추천 : {mockDetail.likeCount}
                </span>
              </div>
            </div>
          </div>
          <div className="article-content">
            <p>
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim. Venenatis
              eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem
              libero tellus viverra venenatis aliquam. Commodo natoque quam
              pulvinar elit.
            </p>
            <p>
              Eget aenean tellus venenatis. Donec odio tempus. Felis arcu
              pretium metus nullam quam aenean sociis quis sem neque vici
              libero. Venenatis nullam fringilla pretium magnis aliquam nunc
              vulputate integer augue ultricies cras. Eget viverra feugiat cras
              ut. Sit natoque montes tempus ligula eget vitae pede rhoncus
              maecenas consectetuer commodo condimentum aenean.
            </p>
          </div>
        </article>
        <div>
          <TotalCommentCount>댓글 수 : {mockComments.length}</TotalCommentCount>
          {mockComments.map((comment) => (
            <Comment {...comment} />
          ))}
        </div>
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
