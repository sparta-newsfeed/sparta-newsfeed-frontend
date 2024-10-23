import Pagination from "react-bootstrap/Pagination";

const CustomPagination: React.FC<{
  page: number;
  maxPage: number;
  setPage: (page: number) => void;
}> = ({ page, maxPage, setPage }) => {
  let items = [];
  for (let number = 0; number < maxPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => setPage(number)}
      >
        {number + 1}
      </Pagination.Item>
    );
  }
  return <Pagination>{items}</Pagination>;
};

export default CustomPagination;
