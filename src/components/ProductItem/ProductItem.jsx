import React, { Component } from "react";
import styled from "styled-components";
import ProductDetails from "./ProductDetails";

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      open: true
    });
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {
    const { item } = this.props;
    return (
      <Item>
        <ItemWrapper onClick={this.openModal}>
          <ItemHover>View details</ItemHover>
          <ItemImg src={item.image} />
          <ItemDesc>
            <ItemName>{item.name}</ItemName>
            <br />
            <ItemPrice>{item.price}</ItemPrice>
          </ItemDesc>
        </ItemWrapper>
        <ProductDetails
          data={item}
          open={this.state.open}
          onClose={this.closeModal}
        />
      </Item>
    );
  }
}

const Item = styled.div`
  display: inline-block;
`;

const ItemHover = styled.p`
  position: absolute;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  font-size: 20px;
  font-wight: 500px;

  transition: opacity 0.2s, visibility 0.2s;
`;

const ItemImg = styled.img`
  width: 225px;
  height: 225px;
  display: block;
  margin: 0 auto;
`;

const ItemDesc = styled.div`
  width: 100%;
  line-height: 1.4 !important;
`;

const ItemName = styled.span`
  font-size: 20px;
  color: #939393;
  font-weight: 400;
`;
const ItemPrice = styled.span`
  font-size: 15px;
  font-style: italic;
`;

const ItemWrapper = styled.div`
  position: relative;
  width: 270px;
  height: 270px;
  padding: 10px 20px;
  margin: 20px;
  cursor: pointer;
  text-align: center;

  &:hover {
    opacity: 0.5;
  }
  &:hover ${ItemHover} {
    visibility: visible;
    opacity: 1;
  }
`;
