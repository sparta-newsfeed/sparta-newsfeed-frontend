import styled from "@emotion/styled";
import ArticleTitle from "./ArticleTitle";
import CustomPagination from "pagination/CustomPagination";

const Articles = () => {
  const mockArticles = [
    {
      id: 1,
      title: "Test title1",
      author: "kimwanyoung",
      lastUpdatedAt: "2024-10-11",
      likeCount: 20,
    },
    {
      id: 2,
      title: "Test title2",
      author: "kimwanyoung",
      lastUpdatedAt: "2024-10-11",
      likeCount: 20,
    },
    {
      id: 3,
      title: "Test title3",
      author: "kimwanyoung",
      lastUpdatedAt: "2024-10-11",
      likeCount: 20,
    },
    {
      id: 4,
      title: "Test title4",
      author: "kimwanyoung",
      lastUpdatedAt: "2024-10-11",
      likeCount: 20,
    },
  ];

  return (
    <Container>
      <div className="p-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">전체 글 보기</h1>
          <p className="col-md-8 fs-4">친구들의 최신 소식을 확인해봅시다.</p>
        </div>
      </div>
      <ArticleListWrapper>
        {mockArticles.map((article) => (
          <ArticleTitle {...article} />
        ))}
      </ArticleListWrapper>
      <PaginationWrapper>
        <CustomPagination page={1} maxPage={5} />
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
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
