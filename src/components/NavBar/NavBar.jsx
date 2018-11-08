import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <NavBarWrapper>
        <LinksWrapper>
          <StyledLink exact to="/">
            HOME
          </StyledLink>
          <StyledLink to="/about">ABOUT</StyledLink>
          <StyledLink to="/products">PRODUCTS</StyledLink>
          <StyledLink to="/contact">CONTACT ME</StyledLink>
        </LinksWrapper>
      </NavBarWrapper>
    );
  }
}

const NavBarWrapper = styled.div`
  width: 470px;
  margin: 30px auto;
`;

const LinksWrapper = styled.ul``;

const activeClassName = "active";

const StyledLink = styled(NavLink).attrs({ activeClassName: activeClassName })`
  display: inline-block;
  padding: 20px 15px 15px 15px;
  margin-left: 5px;
  font-size: 16px;
  font-style: italic;
  color: #939393;
  text-decoration: none;
  &:hover {
    border-top: 3px solid #939393;
    padding-top: 17px;
  }
  &.${activeClassName} {
    border-top: 3px solid #939393;
    padding-top: 17px;
  }
`;
