import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useAuth } from "../AuthContext";

const Wrapper = styled.div`
  width: 50%;
  margin: 30px auto;
  font-size: 2rem;
  & input[type="email"],
  & input[type="password"] {
    margin: 8px 0 20px;
    padding: 14px 20px;
    &::placeholder {
      font-size: 1.8rem;
    }
  }
  & button[type="submit"] {
    width: 100%;
    font-size: 2rem;
  }
`;

const Login = () => {
  const { setAunthenticate } = useAuth();
  const navigate = useNavigate();

  const loginUser = (e) => {
    //로그인 유저가 실행이 된다면
    e.preventDefault(); //우리가 원하는 행동을 하고자 할때 사용
    setAunthenticate(true);
    navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>패스워드</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="danger" type="submit">
            로그인
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
