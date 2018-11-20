import React, { Component } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import XBtn from "../../assets/close-button.svg";

export default class ProductDetails extends Component {
  state = {
    backgroundImage: `url(${this.props.data.image})`,
    backgroundPosition: "0% 0%"
  };

  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - (left + window.scrollX)) / width) * 100;
    const y = ((e.pageY - (top + window.scrollY)) / height) * 100;
    this.setState({ backgroundPosition: `${x}% ${y}%` });
  };
  render() {
    return (
      <Popup
        open={this.props.open}
        closeOnDocumentClick
        onClose={this.props.onClose}
      >
        <ModalWrapper>
          <XButton>
            <Button src={XBtn} onClick={this.props.onClose} />
          </XButton>
          <Wrapper>
            <Img>
              <ImgWrapper onMouseMove={this.handleMouseMove} style={this.state}>
                <ItemImg src={this.props.data.image} />
              </ImgWrapper>
            </Img>
            <DescWrapper>
              <NameText>{this.props.data.name}</NameText>
              <PriceText>{this.props.data.price}</PriceText>
              <DescText>{this.props.data.desc}</DescText>
            </DescWrapper>
          </Wrapper>
        </ModalWrapper>
      </Popup>
    );
  }
}

const ModalWrapper = styled.div`
  height: 450px;
`;

const XButton = styled.div`
  float: right;
  cursor: pointer;
  margin: 5px;
`;

const Button = styled.img`
  width: 20px;
  height: 20px;
`;

const Wrapper = styled.div`
  float: left;
`;

const ItemImg = styled.img`
  width: 120px;
  height: 120px;
  display: block;
  pointer-event: none;
  @media only screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
  @media only screen and (min-width: 1024px) {
    width: 300px;
    height: 300px;
  }
`;

const Img = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

const ImgWrapper = styled.figure`
  display: inline-block;
  cursor: pointer;
  background-repeat: no-repeat;
  margin: 20px 0 0 0px;
  &:hover ${ItemImg} {
    opacity: 0;
  }
  @media only screen and (min-width: 768px) {
    margin: 50px 0 0 20px;
  }
`;

const DescWrapper = styled.div`
  height: 100%;
  text-align: left;
  padding: 0 15px;
  @media only screen and (min-width: 1025px) {
    padding: 20px;
    float: right;
  }
`;
// width: 350px;

const NameText = styled.h1`
  font-size: 14px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

const PriceText = styled.h2`
  font-size: 12px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const DescText = styled.p`
  text-align: justify;
  font-size: 12px;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
