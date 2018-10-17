import React, { Component } from "react";
import styled from "styled-components";

export default class NavBar extends Component {
  render() {
    return (
      <NavBarWrapper>
        <LinkWrapper>
          <Link href="#">Home</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="#">About</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="#">Products</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="#">Contact Me</Link>
        </LinkWrapper>
      </NavBarWrapper>
    );
  }
}

const NavBarWrapper = styled.div`
  width: 290px;
  margin: 10px auto;
`;

const LinkWrapper = styled.div`
  display: inline-block;
  padding: 10px;
  &:hover {
    border-top: 3px solid #939393;
    padding-top: 7px;
  }
`;

const Link = styled.a`
  font-size: 16px;
  font-style: italic;
  color: #939393;
  text-decoration: none;
`;
