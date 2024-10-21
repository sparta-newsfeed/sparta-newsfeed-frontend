import styled from "@emotion/styled";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <Card className="p-3" style={{ width: "100%" }}>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              이름
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              닉네임
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Nickname" />
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
              <Form.Control type="password" placeholder="Password" />
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
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col>
              <Button
                type="submit"
                variant="primary"
                style={{ color: "white" }}
                onClick={handleNavigate}
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
