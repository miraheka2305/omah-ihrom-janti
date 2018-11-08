import React, { Component } from "react";
import styled from "styled-components";
import ProductItem from "../../components/ProductItem/ProductItem";

export default class Products extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <ProductsWrapper>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductsWrapper>
    );
  }
}

const ProductsWrapper = styled.div`
  background: white;
  margin: 10px auto 30px auto;
`;
