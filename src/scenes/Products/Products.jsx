import React, { Component } from "react";
import styled from "styled-components";
import ProductItem from "../../components/ProductItem/ProductItem";

export default class Products extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const productItems = [
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
      },
      {
        id: 4,
        name: "Kain diamond",
        price: "Rp.40.000,00",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:
          "http://bahankain.com/wp-content/uploads//2014/12/pakaian-berbahan-wool.jpg"
      },
      {
        id: 5,
        name: "Kain tenun ikat",
        price: "Rp.140.000,00",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:
          "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/4/_13485964.jpg?h=365&w=240&dpr=2&quality=45&fit=fill&fm=jpg"
      },
      {
        id: 6,
        name: "Kain batik",
        price: "Rp.90.000,00",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:
          "http://bahankain.com/wp-content/uploads//2014/12/pakaian-berbahan-wool.jpg"
      },
      {
        id: 7,
        name: "Kain songket",
        price: "Rp.180.000,00",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:
          "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/4/_13485964.jpg?h=365&w=240&dpr=2&quality=45&fit=fill&fm=jpg"
      },
      {
        id: 8,
        name: "Kain kebaya",
        price: "Rp.80.000,00",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:
          "http://bahankain.com/wp-content/uploads//2014/12/pakaian-berbahan-wool.jpg"
      },
      {
        id: 9,
        name: "Kain flanel",
        price: "Rp.60.000,00",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:
          "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/4/_13485964.jpg?h=365&w=240&dpr=2&quality=45&fit=fill&fm=jpg"
      }
    ];
    return (
      <ProductsWrapper>
        {productItems.map(item => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </ProductsWrapper>
    );
  }
}

const ProductsWrapper = styled.div`
  background: white;
  margin: 10px auto 30px auto;
`;
