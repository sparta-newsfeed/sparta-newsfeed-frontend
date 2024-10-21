import styled from "@emotion/styled";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/articles");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <LoginWrapper>
      <Card className="p-3" style={{ width: "38rem" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">이메일을 입력해주세요.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted">
              비밀번호를 입력해주세요.
            </Form.Text>
          </Form.Group>
          <Button
            className="me-3"
            variant="success"
            type="submit"
            onClick={handleLogin}
          >
            로그인
          </Button>
          <Button onClick={handleRegister} variant="primary" type="submit">
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
