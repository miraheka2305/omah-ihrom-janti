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
            <ImgWrapper onMouseMove={this.handleMouseMove} style={this.state}>
              <ItemImg src={this.props.data.image} />
            </ImgWrapper>
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
  width: 300px;
  height: 300px;
  display: block;
  pointer-event: none;
`;

const ImgWrapper = styled.figure`
  display: inline-block;
  margin: 50px 0 0 20px;
  cursor: pointer;
  background-repeat: no-repeat;
  &:hover ${ItemImg} {
    opacity: 0;
  }
`;

const DescWrapper = styled.div`
  float: right;
  padding: 30px 20px 20px 10px;
  width: 350px;
  height: 100%;
  text-align: left;
`;

const NameText = styled.h1``;

const PriceText = styled.h2``;

const DescText = styled.p`
  text-align: justify;
`;
