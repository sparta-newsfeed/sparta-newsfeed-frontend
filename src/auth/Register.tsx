import styled from "@emotion/styled";
import axios from "axios";
import { LOCAL_HOST } from "constants/constants";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    username: "",
    nickname: "",
    password: "",
    role: "USER",
    checkPassword: "",
  });

  const navigate = useNavigate();

  const handleFormChanger = (event: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = event.target as HTMLFormElement;
    setUserInfo((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userInfo);
    const response = await axios.post(
      LOCAL_HOST + "/api/auth/signup",
      JSON.stringify(userInfo),
      {
        headers: {
          "Content-Type": `application/json`,
        },
      }
    );

    if (response.status === 200) {
      alert("회원가입 성공");
      navigate("/");
    } else {
      alert("회원가입 실패");
    }
  };

  return (
    <Wrapper>
      <Card className="p-3" style={{ width: "100%" }}>
        <Form onChange={handleFormChanger} onSubmit={handleOnSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              이름
            </Form.Label>
            <Col sm={10}>
              <Form.Control name="username" type="text" placeholder="Name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              닉네임
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="nickname"
                type="text"
                placeholder="Nickname"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              이메일
            </Form.Label>
            <Col sm={10}>
              <Form.Control name="email" type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={3}>
              비밀번호
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={3}>
              비밀번호 확인
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="checkPassword"
                type="password"
                placeholder="Password"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col>
              <Button
                type="submit"
                variant="primary"
                style={{ color: "white" }}
              >
                회원가입
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
