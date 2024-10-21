import styled from "@emotion/styled";
import { Button, Card, Form } from "react-bootstrap";

const UpdateUserDetail = () => {
  return (
    <Wrapper>
      <Card className="p-3" style={{ width: "100%" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>닉네임 수정</Form.Label>
            <Form.Control type="email" placeholder="Nickname" />
            <Form.Text className="text-muted">
              수정하실 닉네임을 입력해주세요.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호 수정</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted">
              수정하실 비밀번호를 입력해주세요.
            </Form.Text>
          </Form.Group>
          <Button
            className="me-3"
            variant="outline-primary"
            type="submit"
            // onClick={handleLogin}
          >
            수정하기
          </Button>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default UpdateUserDetail;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;
