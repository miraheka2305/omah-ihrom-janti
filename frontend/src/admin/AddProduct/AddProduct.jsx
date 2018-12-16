import React, { Component } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { Formik } from "formik";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewURL: "",
      open: true,
      item: { id: 0, name: "", price: "", desc: "", image: "" }
    };
    this.baseState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentDidMount() {
    this.setState({
      imagePreviewURL: this.props.item.image,
      item: this.props.item
    });
  }

  handleChange(e) {
    let item = Object.assign({}, this.state.item);
    item[e.target.name] = e.target.value;
    this.setState({
      item: item
    });
  }

  handleImageChange(e) {
    e.preventDefault();
    let item = Object.assign({}, this.state.item);
    let file = e.target.files[0];

    reader.onloadend = () => {
      item.image = reader.result;
      this.setState({ file: file, imagePreviewURL: reader.result, item: item });
    };
    reader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      this.state.item.name === "" ||
      this.state.item.price === "" ||
      this.state.item.desc === "" ||
      this.state.item.image === ""
    ) {
      return;
    }
    this.props.onSubmit(this.state.item);
  }

  handleCancel() {
    this.setState(this.baseState);
    this.props.onClose();
  }

  render() {
    const { imagePreviewURL, item } = this.state;
    return (
      <Popup
        open={this.props.open}
        closeOnDocumentClick
        onClose={this.props.onClose}
      >
        <Wrapper>
          <Title>Manage Your Product</Title>
          <Formik
            validate={() => {
              let errors = {};
              if (!this.state.item.name) {
                errors.name = "Product's name is required";
              }
              if (!this.state.item.price) {
                errors.price = "Product's price is required";
              }
              if (!this.state.item.desc) {
                errors.desc = "Product's description is required";
              }
              return errors;
            }}
            render={({ touched, errors, handleBlur }) => (
              <form onSubmit={e => this.handleSubmit(e)}>
                <FormWrapper>
                  <Label>Product Name</Label>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="name"
                      border={touched.name && errors.name && "1px solid red"}
                      placeholder="Write your product name"
                      value={item.name}
                      onChange={e => this.handleChange(e)}
                      onBlur={handleBlur}
                      required={true}
                    />
                    {touched.name && errors.name && (
                      <Text color="red">{errors.name}</Text>
                    )}
                  </InputWrapper>
                </FormWrapper>
                <FormWrapper>
                  <Label>Product Price</Label>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="price"
                      border={touched.price && errors.price && "1px solid red"}
                      placeholder="Write your product price"
                      value={item.price}
                      onChange={e => this.handleChange(e)}
                      onBlur={handleBlur}
                      required={true}
                    />
                    {touched.price && errors.price && (
                      <Text color="red">{errors.price}</Text>
                    )}{" "}
                  </InputWrapper>
                </FormWrapper>
                <FormWrapper>
                  <Label>Product Description</Label>
                  <InputWrapper>
                    <InputDesc
                      type="text"
                      name="desc"
                      border={touched.desc && errors.desc && "1px solid red"}
                      placeholder="Write your product description"
                      value={item.desc}
                      onChange={e => this.handleChange(e)}
                      onBlur={handleBlur}
                      required={true}
                    />
                    {touched.desc && errors.desc && (
                      <Text color="red">{errors.desc}</Text>
                    )}
                  </InputWrapper>
                </FormWrapper>
                <FormWrapper>
                  <Label>Product Photo</Label>
                  <InputWrapper>
                    <Input
                      type="file"
                      name="image"
                      onChange={e => this.handleImageChange(e)}
                      onBlur={handleBlur}
                      required={true}
                    />

                    <ImagePreviewWrapper>
                      {imagePreviewURL ? (
                        <ImagePreview src={imagePreviewURL} />
                      ) : (
                        <p>Please select an Image for Preview</p>
                      )}
                    </ImagePreviewWrapper>
                  </InputWrapper>
                </FormWrapper>
                <ButtonWrapper>
                  <Button type="submit" onClick={e => this.handleSubmit(e)}>
                    Submit
                  </Button>
                  <ButtonCancel onClick={this.handleCancel}>
                    Cancel
                  </ButtonCancel>
                </ButtonWrapper>
              </form>
            )}
          />
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
  border: ${props => props.border || "1px solid #d6d6d6"};
`;

const InputDesc = styled.textarea`
  font-size: 15px;
  width: 300px;
  height: 70px;
  resize: none;
  border-radius: 5px;
  padding: 5px;
  border: ${props => props.border || "1px solid #d6d6d6"};
`;

const ImagePreviewWrapper = styled.div`
  text-align: center;
  margin: 5px 0;
  height: 200px;
  width: 200px;
  border: 1px solid gray;
`;
const ImagePreview = styled.img`
  height: 100%;
  width: 100%;
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
