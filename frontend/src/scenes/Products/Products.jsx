import React, { Component } from "react";
import styled from "styled-components";
import ProductItem from "../../components/ProductItem/ProductItem";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  getProductData() {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    };

    return fetch("https://www.omahihromjanti.com/api/products", options).then(
      response => {
        return response.json();
      }
    );
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.getProductData().then(response => {
      console.log("response: ", response);
      let productsData = response.Data;
      let products = [];

      if (productsData !== null) {
        productsData.forEach(product => {
          products.push({
            id: product.Id,
            name: product.Name,
            price: product.Price,
            description: product.Description,
            image: "https://www.omahihromjanti.com/api" + product.Images[0].Url
          });
        });
      }
      this.setState({
        products: products
      });
    });
  }
  render() {
    const { products } = this.state;
    return (
      <ProductsWrapper>
        {products.map(product => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </ProductsWrapper>
    );
  }
}

const ProductsWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    margin: 10px 30px 30px 30px;
  }
`;
