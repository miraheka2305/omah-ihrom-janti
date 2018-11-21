import React, { Component } from "react";
import styled from "styled-components";

export default class ManageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "admin",
      password: "password"
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
