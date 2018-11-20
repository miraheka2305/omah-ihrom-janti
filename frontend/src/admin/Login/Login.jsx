import React, { Component } from "react";
import styled from "styled-components";

export default class Login extends Component {
  render() {
    return (
      <Wrapper>
        <LoginWrapper>
          <Title>Hi, Welcome</Title>
          <Greetings>
            This is admin page of Omah Ihrom Janti. Enjoy to manage your
            products
          </Greetings>
          <FormWrapper>
            <Label>Username</Label>
            <Input type="text" placeholder="type your username" />
          </FormWrapper>
          <FormWrapper>
            <Label style={{ marginRight: "3px" }}>Password</Label>
            <Input type="password" placeholder="type your password" />
          </FormWrapper>
          <SubmitInput type="Submit" placeholder="Submit" />
        </LoginWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  position: relative;
`;
const LoginWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  background: #a0a0a0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 15px;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  line-height: 0.5em;
`;

const Greetings = styled.h4`
  text-align: center;
  color: white;
`;

const FormWrapper = styled.div`
  margin: 10px 15px;
`;

const Label = styled.label`
  color: white;
  font-size: 16px;
`;

const Input = styled.input`
  margin-left: 10px;
  border: none;
  font-size: 14px;
  width: 280px;
`;

const SubmitInput = styled.input`
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
  color: #808080;
  margin: 10px 15px;
`;
