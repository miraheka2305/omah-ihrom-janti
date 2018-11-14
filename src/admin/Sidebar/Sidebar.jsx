import React, { Component } from "react";
import styled from "styled-components";

export default class Sidebar extends Component {
  render() {
    return (
      <Wrapper>
        <TitleWrapper>Omah Ihrom Janti</TitleWrapper>
        <BarWrapper>Manage Products</BarWrapper>
        <BarWrapper>Manage Profile</BarWrapper>
        <SignOutWrapper>Sign Out</SignOutWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100vh;
  width: 300px;
  background-color: #f1f1f1 !important;
`;

const TitleWrapper = styled.div`
  height: 80px;
  border-bottom: 1px solid #ccc !important;
  font-size: 28px;
  font-weight: 600;
  line-height: 80px;
  padding: 0 15px;
`;
const BarWrapper = styled.div`
  height: 60px;
  border-bottom: 1px solid #ccc !important;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  line-height: 60px;
  padding: 0 15px;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const SignOutWrapper = styled(BarWrapper)`
  position: absolute
  bottom: 0;
  width: 270px;
  border-bottom: none;
  border-top: 1px solid #ccc !important;
`;
