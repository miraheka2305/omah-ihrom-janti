import React, { Component } from "react";
import styled from "styled-components";
import bannerImg from "../../assets/banner-image.jpg";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ProductItem from "../../components/ProductItem/ProductItem";

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <BannerWrapper>
          <NavBar />
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
        </ProductPreviewWrapper>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  background: white;
  width: 100vw;
`;

const BannerWrapper = styled.div`
  height: 1080px;
  width: 100%;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 50px;
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
  height: 400px;
  text-align: center;
  padding: 60px 0;
`;

const ProductWrapper = styled.div`
  width: 1060px;
  margin: 50px auto;
`;

const ProductPreviewTitle = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: #545454;
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: 225px;
`;
