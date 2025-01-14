import axios from "axios";
import { LOCAL_HOST } from "constants/constants";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { FriendDetailType } from "types/users.type";
import FriendModal from "user/FriendModal";

function CustomNavbar() {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);
  const navigation = useNavigate();
  const location = useLocation();
  const [friends, setFriends] = useState<FriendDetailType[]>([]);
  const isAuthUrl =
    location.pathname === "/" || location.pathname === "/register";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await axios.get(
      LOCAL_HOST + `/api/members/search?username=${userName}`,
      {
        withCredentials: true,
      }
    );
    console.log(response);
    setFriends(response.data.content);
    setUserName("");
    setShow(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleFriendModalShow = () => {
    setShow(false);
  };

  if (isAuthUrl) return <></>;
  return (
    <>
      <FriendModal
        friends={friends}
        show={show}
        handleClose={handleFriendModalShow}
      />
      <Navbar className="m-2" expand="lg">
        <Container fluid>
          <Navbar.Brand
            onClick={() => navigation("/articles")}
            style={{ cursor: "pointer" }}
          >
            Newsfeed
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Button
              onClick={() => navigation("/")}
              className="me-3"
              variant="outline-primary"
            >
              로그아웃
            </Button>
            <Button
              onClick={() => navigation("/user-detail")}
              className="me-3"
              variant="outline-primary"
            >
              마이페이지
            </Button>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="친구 찾기"
                className="me-2"
                aria-label="Search"
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                variant="outline-primary"
                style={{ width: "150px" }}
              >
                친구찾기
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
