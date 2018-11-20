import React, { Component } from "react";
import styled from "styled-components";
import Address from "../../assets/address.png";
import Phone from "../../assets/phone.png";

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <Title>Contacts Us</Title>
        <Description>
          <SubDescription>
            <Icon src={Address} />
            Jl. Ir.H.Djuanda, Gang Wardia No.26, Bandung - Jawa Barat
          </SubDescription>
          <SubDescription>
            <Icon src={Phone} />
            +62 8122 4263 312
          </SubDescription>
        </Description>
        <CopyRight>&copy; 2018 by A&amp;M Project</CopyRight>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.div`
  padding: 10px 0;
  border-top: 1px solid #939393;
  color: #939393;
  text-align: center;
  @media only screen and (min-width: 768px) {
    padding: 25px;
  }
`;

const Title = styled.h1`
  font-size: 16px;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.div`
  border: 3px solid #939393;
  margin: 20px auto;
  padding: 15px 20px;
  font-size: 14px;
  width: 250px;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 440px;
    height: 60px;
  }
`;

const SubDescription = styled.div`
  display: inline-block;
  line-height: 1.5em;
  font-weight: 500;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const CopyRight = styled.div`
  margin: 50px auto 10px auto;
  font-size: 12px;
  font-style: italic;
`;
