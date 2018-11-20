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
  @media only screen and (min-width: 768px) {
    display: inline-block;
  }
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
  width: 195px;
  height: 195px;
  display: block;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 225px;
    height: 225px;
  }
`;

const ItemDesc = styled.div`
  width: 100%;
  line-height: 1.4 !important;
  margin-top: 10px;
`;

const ItemName = styled.span`
  font-size: 16px;
  color: #939393;
  font-weight: 400;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
const ItemPrice = styled.span`
  font-size: 12px;
  font-style: italic;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

const ItemWrapper = styled.div`
  position: relative;
  width: 270px;
  height: 270px;
  padding: 15px 25px;
  cursor: pointer;
  text-align: center;
  margin: 0 auto;
  &:hover {
    opacity: 0.5;
  }
  &:hover ${ItemHover} {
    visibility: visible;
    opacity: 1;
  }
`;
