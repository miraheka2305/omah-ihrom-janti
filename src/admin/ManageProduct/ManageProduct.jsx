import React, { Component } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

export default class ManageProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "", open: true };
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
      <Popup open={this.state.open}>
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
              <Label>Product Photo</Label>
              <Input type="file" onChange={e => this.handleImageChange(e)} />
            </FormWrapper>
            <ButtonWrapper>
              <Button type="submit" onClick={e => this.handleSubmit(e)}>
                Submit
              </Button>
              <ButtonCancel>Cancel</ButtonCancel>
            </ButtonWrapper>
          </form>
        </Wrapper>
      </Popup>
    );
  }
}

const Wrapper = styled.div`
  padding: 20px 30px;
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
  border: 1px solid #d6d6d6;
`;

const InputDesc = styled.textarea`
  border: 1px solid #d6d6d6;
  font-size: 15px;
  width: 300px;
  height: 70px;
  resize: none;
  border-radius: 5px;
  padding: 5px;
`;

const ButtonWrapper = styled.div`
  width: 280px;
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
