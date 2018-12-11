import React, { Component } from "react";
import styled from "styled-components";
import auth from "../../auth";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "admin",
      password: "password",
      user: {
        username: "",
        password: ""
      }
    };
    this.baseState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
    let user = Object.assign({}, this.state.user);
    user[e.target.name] = e.target.value;
    this.setState({
      user: user
    });
  }

  handleLogin() {
    if (this.state.user.username === this.state.username) {
      if (this.state.user.password === this.state.password) {
        auth.login(() => {
          this.props.history.push("/admin-home");
        });
      } else {
        this.setState(this.baseState);
      }
    } else {
      this.setState(this.baseState);
    }
  }

  render() {
    const { user } = this.state;
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
            <Input
              type="text"
              name="username"
              value={user.username}
              onChange={e => this.handleChange(e)}
              placeholder="type your username"
            />
          </FormWrapper>
          <FormWrapper>
            <Label style={{ marginRight: "3px" }}>Password</Label>
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={e => this.handleChange(e)}
              placeholder="type your password"
            />
          </FormWrapper>
          <SubmitButton onClick={this.handleLogin}>Login</SubmitButton>
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

const SubmitButton = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
  color: #808080;
  margin: 10px 15px;
`;
