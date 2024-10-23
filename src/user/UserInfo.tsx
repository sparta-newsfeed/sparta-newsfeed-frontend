import { Form } from "react-bootstrap";
import { UserInfoType } from "types/users.type";

const UserInfo: React.FC<UserInfoType> = ({
  id,
  email,
  name,
  nickname,
  createdAt,
}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder={name} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>닉네임</Form.Label>
        <Form.Control type="text" placeholder={nickname} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>이메일</Form.Label>
        <Form.Control type="email" placeholder={email} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>가입일</Form.Label>
        <Form.Control type="text" placeholder={createdAt} disabled />
      </Form.Group>
    </Form>
  );
};

export default UserInfo;
