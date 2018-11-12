import React, { Component } from "react";
import styled from "styled-components";

export default class ManageProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handle uploading", this.state.file);
  }

  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({ file: file });
    };

    reader.readAsDataURL(file);
  }
  render() {
    return (
      <Wrapper>
        <Title>Manage Your Product</Title>
        <form onSubmit={e => this.handleSubmit(e)}>
          <FormWrapper>
            <Label>Product Name</Label>
            <Input type="text" placeholder="Write your product name" />
          </FormWrapper>
          <FormWrapper>
            <Label>Product Price</Label>
            <Input type="number" placeholder="Write your product price" />
          </FormWrapper>
          <FormWrapper>
            <Label>Product Description</Label>
            <InputDesc type="text" placeholder="Write your product name" />
          </FormWrapper>
          <FormWrapper>
            <Input type="file" onChange={e => this.handleImageChange(e)} />
          </FormWrapper>
          <Button type="submit" onClick={e => this.handleSubmit(e)}>
            Submit
          </Button>
        </form>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 30px 40px;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const FormWrapper = styled.div`
  margin: 10px 0;
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
`;

const InputDesc = styled.textarea`
  font-size: 15px;
  width: 300px;
  height: 70px;
  resize: none;
  border-radius: 5px;
  padding: 5px;
`;

const Button = styled.button`
  font-size: 18px;
  width: 100px;
  height: 50px;
  padding: 10px;
  border-radius: 5px;
`;
