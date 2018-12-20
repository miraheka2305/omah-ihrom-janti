import React, { Component } from "react";
import styled from "styled-components";
import bannerImg from "../../assets/banner-image.jpg";
import ProductItem from "../../components/ProductItem/ProductItem";
import { NavLink } from "react-router-dom";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsPrev: []
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

    return fetch("https://omahihromjanti.com/api/products", options).then(
      response => {
        return response.json();
      }
    );
  }

  componentDidMount() {
    this.getProductData().then(response => {
      let productsData = response.Data;
      let products = [];

      if (productsData !== null) {
        productsData.forEach(product => {
          products.push({
            id: product.Id,
            name: product.Name,
            price: product.Price,
            description: product.Description,
            image: "https://omahihromjanti.com/api" + product.Images[0].Url
          });
        });
      }
      products = products.slice(0, 3);
      this.setState({
        productsPrev: products
      });
    });
  }

  render() {
    const { productsPrev } = this.state;
    return (
      <HomeWrapper>
        <BannerWrapper>
          <TitleWrapper>
            <Title>OMAH IHROM JANTI</Title>
            <br />
            <SubTitle>Feel confort with the softness of our products</SubTitle>
          </TitleWrapper>
        </BannerWrapper>
        <ProductPreviewWrapper>
          <ProductPreviewTitle>Hot Item</ProductPreviewTitle>
          <ProductWrapper>
            {productsPrev.map(product => {
              return <ProductItem key={product.id} product={product} />;
            })}
          </ProductWrapper>
          <MoreButton to="/products">More Products</MoreButton>
        </ProductPreviewWrapper>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  background: white;
  width: 100vw;
`;

const BannerWrapper = styled.div`
  height: 500px;
  width: 100%;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 40px;
  @media only screen and (min-width: 768px) {
    height: 800px;
  }
`;

const TitleWrapper = styled.div`
  width: 200px;
  padding: 20px 10px;
  margin: 0 auto;
  border-top: 2px solid #3f3f3f;
  border-bottom: 2px solid #3f3f3f;
  text-align: center;
  color: #3f3f3f;
  @media only screen and (min-width: 768px) {
    height: 80px;
    width: 400px;
  }
`;

const Title = styled.span`
  font-size: 16px
  font-weight: 550;
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  @media only screen and (min-width: 768px) {
    line-height: 2em;
    font-size: 20px;
  }
`;

const ProductPreviewWrapper = styled.div`
  text-align: center;
  padding: 60px 0;
`;

const ProductWrapper = styled.div`
  margin: 30px auto;
  @media only screen and (min-width: 1024px) {
    width: 1060px;
  }
`;

const ProductPreviewTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #545454;
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

const MoreButton = styled(NavLink)`
  width: 60px;
  height: 30px;
  font-size: 16px;
  background: #696969;
  padding: 10px;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  @media only screen and (min-width: 768px) {
    width: 100px;
    height: 40px;
    font-size: 20px;
  }
`;
