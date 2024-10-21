import Pagination from "react-bootstrap/Pagination";

const CustomPagination: React.FC<{ page: number; maxPage: number }> = ({
  page,
  maxPage,
}) => {
  let items = [];
  for (let number = 1; number <= maxPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number === page}>
        {number}
      </Pagination.Item>
    );
  }
  return <Pagination>{items}</Pagination>;
};

export default CustomPagination;
