import React, { Component } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

export default class ModalConfirmation extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(e) {
    e.preventDefault();
    this.props.onDelete(this.props.product);
  }
  render() {
    return (
      <Popup
        open={this.props.open}
        closeOnDocumentClick
        onClose={this.props.onClose}
      >
        <Wrapper>
          <Title>Are you sure to delete this product?</Title>
          <ButtonWrapper>
            <Button onClick={this.props.onClose}>Cancel</Button>
            <Button onClick={this.handleDelete}>Delete</Button>
          </ButtonWrapper>
        </Wrapper>
      </Popup>
    );
  }
}
const Wrapper = styled.div`
  padding: 20px 30px;
`;

const Title = styled.h3`
  font-size: 18px;
  text-align: center;
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
  &:hover {
    background: #808080;
    color: #ffffff;
  }
`;
