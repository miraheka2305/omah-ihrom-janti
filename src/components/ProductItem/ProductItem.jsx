import React, { Component } from "react";
import styled from "styled-components";
import Towel from "../../assets/towel_example.jpeg";
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
    const dummyData = {
      image:
        "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/4/_13485964.jpg?h=365&w=240&dpr=2&quality=45&fit=fill&fm=jpg",
      name: "Handuk Sutra Halus",
      price: "Rp.100.000,00",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
    return (
      <Item>
        <ItemWrapper onClick={this.openModal}>
          <ItemHover>View details</ItemHover>
          <ItemImg src={dummyData.image} />
          <ItemDesc>
            <ItemName>{dummyData.name}</ItemName>
            <br />
            <ItemPrice>{dummyData.price}</ItemPrice>
          </ItemDesc>
        </ItemWrapper>
        <ProductDetails
          data={dummyData}
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
