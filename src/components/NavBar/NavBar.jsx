import React, { Component } from "react";
import styled from "styled-components";

export default class NavBar extends Component {
  render() {
    return (
      <NavBarWrapper>
        <LinkWrapper>
          <Link href="#">HOME</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="#">ABOUT</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="#">PRODUCTS</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="#">CONTACT ME</Link>
        </LinkWrapper>
      </NavBarWrapper>
    );
  }
}

const NavBarWrapper = styled.div`
  width: 400px;
  margin: 10px auto;
`;

const LinkWrapper = styled.div`
  display: inline-block;
  padding: 20px 15px 15px 15px;
  &:hover {
    border-top: 3px solid #939393;
    padding-top: 17px;
  }
`;

const Link = styled.a`
  font-size: 16px;
  font-style: italic;
  color: #939393;
  text-decoration: none;
`;
