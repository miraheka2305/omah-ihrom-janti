import React, { Component } from "react";
import styled from "styled-components";
import { Formik } from "formik";

export default class ManageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      repassword: "",
      isSuccess: false
    };
    this.baseState = this.state;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  getProfile() {
    const options = {
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("jwtToken"),
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    };
    return fetch("https://omahihromjanti.com/api/userinfo?", options).then(
      rsp => {
        return rsp.json();
      }
    );
  }

  componentDidMount() {
    this.getProfile().then(rsp => {
      let username = rsp.Data.Username;
      this.setState({
        username: username
      });
    });
  }

  updateProfile() {
    const options = {
      method: "PUT",
      headers: {
        Authorization: sessionStorage.getItem("jwtToken"),
        Accept: "application/json, text/plain, */*"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    };
    return fetch("https://omahihromjanti.com/api/users", options).then(
      response => {
        return response.json();
      }
    );
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.updateProfile().then(rsp => {
      if (rsp.Status === 1) {
        this.setState({
          username: rsp.Data.Username,
          isSuccess: true
        });
      }
    });
  }

  handleCancel() {
    this.setState(this.baseState);
  }

  render() {
    const { username, password, repassword, isSuccess } = this.state;
    return (
      <Wrapper>
        <Title>Manage Profile</Title>
        <Formik
          validate={() => {
            let errors = {};
            if (!username) {
              errors.username = "Username is required";
            }
            if (!password) {
              errors.password = "Password is required";
            }
            if (password.length < 6) {
              errors.password = "At least 6 characters for your password";
            }
            if (!repassword) {
              errors.repassword = "You must confirm your password";
            }
            if (password !== repassword) {
              errors.repassword = "The password don't match";
            }

            return errors;
          }}
          render={({ touched, errors, handleBlur }) => (
            <form>
              <Form>
                <FormWrapper>
                  <Label>User Name</Label>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="username"
                      border={
                        touched.username && errors.username && "1px solid red"
                      }
                      value={username}
                      onChange={this.handleChange}
                      onBlur={handleBlur}
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
                      value={password}
                      onChange={this.handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password && (
                      <Text color="red">{errors.password}</Text>
                    )}
                  </InputWrapper>
                </FormWrapper>
                <FormWrapper>
                  <Label>Re-Password</Label>
                  <InputWrapper>
                    <Input
                      type="password"
                      name="repassword"
                      value={repassword}
                      onChange={this.handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.repassword && errors.repassword && (
                      <Text color="red">{errors.repassword}</Text>
                    )}
                  </InputWrapper>
                  {isSuccess ? (
                    <Text
                      color="blue"
                      style={{
                        textAlign: "center",
                        marginTop: "5px"
                      }}
                    >
                      The profile updated.
                    </Text>
                  ) : (
                    ""
                  )}
                </FormWrapper>
                <ButtonWrapper>
                  <Button type="submit" onClick={e => this.handleSubmit(e)}>
                    Submit
                  </Button>
                  <ButtonCancel onClick={this.handleCancel}>
                    Cancel
                  </ButtonCancel>
                </ButtonWrapper>
              </Form>
            </form>
          )}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  text-align: center;
`;

const FormWrapper = styled.div`
  margin: 10px 0;
`;

const Form = styled.div`
  width: fit-content;
  margin: 50px auto;
`;

const Label = styled.div`
  font-size: 18px;
  width: 200px;
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
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #d6d6d6;
`;

const ButtonWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
const Button = styled.button`
  font-size: 16px;
  width: 100px;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
`;

const ButtonCancel = styled(Button)`
  background: #a8a8a8;
  color: white;
`;
