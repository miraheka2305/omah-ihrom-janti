import React, { Component } from "react";
import styled from "styled-components";
import bannerImg from "../../assets/banner-image.jpg";
import ProductItem from "../../components/ProductItem/ProductItem";
import { NavLink } from "react-router-dom";
export default class Home extends Component {
  render() {
    const productItemPreview = [
      {
        id: 1,
        name: "Handuk Sutra Halus",
        price: "Rp.100.000,00",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:
          "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/4/_13485964.jpg?h=365&w=240&dpr=2&quality=45&fit=fill&fm=jpg"
      },
      {
        id: 2,
        name: "Kain Rayon",
        price: "Rp.50.000,00",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:
          "http://bahankain.com/wp-content/uploads//2014/12/pakaian-berbahan-wool.jpg"
      },
      {
        id: 3,
        name: "Kain Wol",
        price: "Rp.80.000,00",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:
          "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/4/_13485964.jpg?h=365&w=240&dpr=2&quality=45&fit=fill&fm=jpg"
      }
    ];
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
            {productItemPreview.map(item => {
              return <ProductItem key={item.id} item={item} />;
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
