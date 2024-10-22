import styled from "@emotion/styled";
import axios from "axios";
import { LOCAL_HOST } from "constants/constants";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

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
      LOCAL_HOST + "/api/auth/login",
      JSON.stringify(userInfo),
      {
        headers: {
          "Content-Type": `application/json`,
        },
      }
    );

    if (response.status === 200) {
      alert("로그인 성공");
      navigate("/articles");
    } else {
      alert("로그인 실패");
    }
  };

  return (
    <LoginWrapper>
      <Card className="p-3" style={{ width: "38rem" }}>
        <Form onChange={handleFormChanger} onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">이메일을 입력해주세요.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
            <Form.Text className="text-muted">
              비밀번호를 입력해주세요.
            </Form.Text>
          </Form.Group>
          <Button className="me-3" variant="success" type="submit">
            로그인
          </Button>
          <Button onClick={handleRegister} variant="primary" type="button">
            회원가입
          </Button>
        </Form>
      </Card>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
