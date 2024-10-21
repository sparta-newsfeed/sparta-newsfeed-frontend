import { Form } from "react-bootstrap";

const UserInfo = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="김완영" disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>닉네임</Form.Label>
        <Form.Control type="text" placeholder="김완영" disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>이메일</Form.Label>
        <Form.Control type="email" placeholder="dhks2869@gmail.com" disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>가입일</Form.Label>
        <Form.Control type="text" placeholder="2024-10-21" disabled />
      </Form.Group>
    </Form>
  );
};

export default UserInfo;
