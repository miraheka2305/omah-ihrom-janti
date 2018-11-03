import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ProductItem from "../../components/ProductItem/ProductItem";

export default class Products extends Component {
  render() {
    return (
      <ProductsWrapper>
        <NavBar />
        <ProductWrapper>
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
        </ProductWrapper>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </ProductsWrapper>
    );
  }
}

const ProductsWrapper = styled.div`
  background: white;
  width: 100vw;
  padding-top: 50px;
`;

const ProductWrapper = styled.div`
  height: auto;
  margin: 20px auto;
`;
// width: 100%;

const FooterWrapper = styled.div`
  width: 100%;
  height: 225px;
`;
// position: absolute;
// bottom: 0;
