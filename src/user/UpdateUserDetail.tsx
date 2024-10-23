import styled from "@emotion/styled";
import axios from "axios";
import { LOCAL_HOST } from "constants/constants";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const UpdateUserDetail = () => {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnSubmitNickName = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const response = await axios.patch(
      LOCAL_HOST + "/api/members/info",
      JSON.stringify({ nickname: nickName }),
      {
        headers: {
          "Content-Type": `application/json`,
        },
        withCredentials: true,
      }
    );

    setNickName("");
    alert("닉네임 수정 완료");
  };

  const handleOnSubmitPassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const response = await axios.patch(
      LOCAL_HOST + "/api/members/password",
      JSON.stringify({
        newPassword: password,
        confirmNewPassword: password,
      }),
      {
        headers: {
          "Content-Type": `application/json`,
        },
        withCredentials: true,
      }
    );

    setPassword("");
    alert("비밀번호 수정 완료");
  };

  return (
    <Wrapper>
      <Card className="p-3" style={{ width: "100%" }}>
        <Form className="mb-5" onSubmit={handleOnSubmitNickName}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>닉네임 수정</Form.Label>
            <Form.Control
              onChange={onChangeNickName}
              name="nickname"
              type="text"
              placeholder="Nickname"
            />
            <Form.Text className="text-muted">
              수정하실 닉네임을 입력해주세요.
            </Form.Text>
          </Form.Group>
          <Button className="me-3" variant="outline-primary" type="submit">
            수정하기
          </Button>
        </Form>
        <Form onSubmit={handleOnSubmitPassword}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호 수정</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={onChangePassword}
            />
            <Form.Text className="text-muted">
              수정하실 비밀번호를 입력해주세요.
            </Form.Text>
          </Form.Group>
          <Button className="me-3" variant="outline-primary" type="submit">
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
