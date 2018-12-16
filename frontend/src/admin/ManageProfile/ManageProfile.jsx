import React, { Component } from "react";
import styled from "styled-components";
<<<<<<< HEAD
import { Formik } from "formik";
=======
>>>>>>> Implement UI manage profile

export default class ManageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "admin",
<<<<<<< HEAD
      password: "password",
      repassword: "password"
=======
      password: "password"
>>>>>>> Implement UI manage profile
    };
    this.baseState = this.state;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit() {
    console.log("hui submit");
  }

  handleCancel() {
    this.setState(this.baseState);
  }

  render() {
    return (
      <Wrapper>
        <Title>Manage Profile</Title>
<<<<<<< HEAD
        <Formik
          validate={() => {
            let errors = {};
            if (!this.state.username) {
              errors.username = "Username is required";
            }
            if (!this.state.password) {
              errors.password = "Password is required";
            }
            if (this.state.password.length < 6) {
              errors.password = "At least 6 characters for your password";
            }
            if (!this.state.repassword) {
              errors.repassword = "You must confirm your password";
            }
            if (this.state.password !== this.state.repassword) {
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
                      value={this.state.username}
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
                      value={this.state.password}
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
                      value={this.state.repassword}
                      onChange={this.handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.repassword && errors.repassword && (
                      <Text color="red">{errors.repassword}</Text>
                    )}
                  </InputWrapper>
                </FormWrapper>
                <ButtonWrapper>
                  <Button type="submit" onSubmit={this.handleSubmit}>
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
=======
        <Form>
          <FormWrapper>
            <Label>User Name</Label>
            <Input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormWrapper>
          <FormWrapper>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormWrapper>
          <ButtonWrapper>
            <Button type="submit" onSubmit={this.handleSubmit}>
              Submit
            </Button>
            <ButtonCancel onClick={this.handleCancel}>Cancel</ButtonCancel>
          </ButtonWrapper>
        </Form>
>>>>>>> Implement UI manage profile
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
<<<<<<< HEAD
const Text = styled.p`
  color: ${props => props.color || "#4d4d4d"};
  margin-top: 0;
  margin-bottom: 5px;
`;

const InputWrapper = styled.div`
  display: inline-block;
`;
=======
>>>>>>> Implement UI manage profile

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
