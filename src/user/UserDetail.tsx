import styled from "@emotion/styled";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import UserInfo from "./UserInfo";
import FriendCard from "./FriendCard";
import UpdateUserDetail from "./UpdateUserDetail";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Cancellation from "./Cancellation";

function UserDetail() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>비밀번호 확인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            현재 사용하시는 비밀번호를 입력해주세요.
          </Form.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            비밀번호 확인
          </Button>
        </Modal.Footer>
      </Modal>
      <UserDetailTitle>
        <h3>마이페이지</h3>
      </UserDetailTitle>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">내 정보</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">친구 목록</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">정보 수정</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="forth">회원 탈퇴</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <UserInfo />
              </Tab.Pane>
              <Tab.Pane
                eventKey="second"
                style={{ height: "500px", overflow: "scroll" }}
              >
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <UpdateUserDetail />
              </Tab.Pane>
              <Tab.Pane eventKey="forth">
                <Cancellation />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default UserDetail;

const UserDetailTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;

  h3 {
    font-size: 35px;
    font-weight: bold;
  }
`;
