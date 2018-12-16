import React, { Component } from "react";
import styled from "styled-components";
import auth from "../../auth";
import { Formik } from "formik";

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

  postData() {
    let userData = {
      username: this.state.user.username,
      password: this.state.user.password
    };

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    };
    return fetch("http://localhost:8000/api/login", options).then(response => {
      return response.json();
    });
  }

  handleLogin() {
    this.postData().then(response => {
      console.log(response);
      if (response.Status === 1) {
        this.setState({
          username: this.state.user.username,
          password: this.state.user.password
        });
        sessionStorage.setItem("jwtToken", response.Data.token);
        auth.login(() => {
          this.props.history.push("/admin-home");
        });
      }else{
        this.setState(this.baseState);
        // errors.password = "The given password is wrong";
      }
    });
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
          <Formik
            validate={() => {
              let errors = {};
              if (!this.state.user.username) {
                errors.username = "Username is required";
              }
              if (!this.state.user.password) {
                errors.password = "Password is required";
              }
              return errors;
            }}
            // onSubmit={() => {
            //   let errors = {};
            //   if (this.state.user.username === this.state.username) {
            //     if (this.state.user.password === this.state.password) {
            //       auth.login(() => {
            //         this.props.history.push("/admin-home");
            //       });
            //     } else {
            //       errors.password = "The given password is wrong";
            //       // this.setState(this.baseState);
            //     }
            //   } else {
            //     errors.username = "The given username is wrong";
            //     // this.setState(this.baseState);
            //   }
            //   return errors;
            // }}
            render={({ touched, errors, handleBlur }) => (
              <form>
                <FormWrapper>
                  <Label>Username</Label>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="username"
                      value={user.username}
                      border={
                        touched.username && errors.username && "1px solid red"
                      }
                      onChange={e => this.handleChange(e)}
                      onBlur={handleBlur}
                      placeholder="type your username"
                    />
                    {touched.username && errors.username && (
                      <Text color="red">{errors.username}</Text>
                    )}
                  </InputWrapper>
                </FormWrapper>
                <FormWrapper>
                  <Label>Password</Label>
                  <InputWrapper>
                    <Input
                      type="password"
                      name="password"
                      value={user.password}
                      border={
                        touched.password && errors.password && "1px solid red"
                      }
                      onChange={e => this.handleChange(e)}
                      onBlur={handleBlur}
                      placeholder="type your password"
                    />
                    {touched.password && errors.password && (
                      <Text color="red">{errors.password}</Text>
                    )}
                  </InputWrapper>
                </FormWrapper>
                <SubmitButton onClick={this.handleLogin}>Login</SubmitButton>
              </form>
            )}
          />
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
  margin: 10px 0;
`;

const Label = styled.div`
  color: white;
  font-size: 18px;
  width: 100px;
  display: inline-block;
  vertical-align: top;
`;

const Text = styled.p`
  color: ${props => props.color || "#4d4d4d"};
  margin-top: 0;
  margin-bottom: 5px;
`;

const InputWrapper = styled.div`
  display: inline-block;
`;

const Input = styled.input`
  font-size: 15px;
  width: 250px;
  padding: 5px;
  border-radius: 5px;
  border: ${props => props.border || "1px solid #d6d6d6"};
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
