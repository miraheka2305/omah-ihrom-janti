import React, { Component } from "react";
import styled from "styled-components";
import bannerImg from "../../assets/banner-image.jpg";
import ProductItem from "../../components/ProductItem/ProductItem";
import { NavLink } from "react-router-dom";
export default class Home extends Component {
  render() {
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
            <ProductItem />
            <ProductItem />
            <ProductItem />
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
  height: 800px;
  width: 100%;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 40px;
`;

const TitleWrapper = styled.div`
  height: 80px;
  width: 400px;
  padding: 20px 10px;
  margin: 0 auto;
  border-top: 2px solid #3f3f3f;
  border-bottom: 2px solid #3f3f3f;
  text-align: center;
  color: #3f3f3f;
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: 550;
`;

const SubTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 2em;
`;

const ProductPreviewWrapper = styled.div`
  height: 480px;
  text-align: center;
  padding: 60px 0;
`;

const ProductWrapper = styled.div`
  width: 1060px;
  margin: 30px auto;
`;

const ProductPreviewTitle = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: #545454;
`;

const MoreButton = styled(NavLink)`
  width: 100px;
  height: 40px;
  background: #696969;
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  border-radius: 5px;
`;
