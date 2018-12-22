import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import auth from "../../auth";
export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    auth.logout(() => {
      sessionStorage.removeItem("jwtToken");
      this.props.data.history.push("/login");
    });
  }
  render() {
    return (
      <Wrapper>
        <TitleWrapper>Omah Ihrom Janti</TitleWrapper>
        <BarWrapper>
          <StyledLink exact to="/admin-home">
            Manage Products
          </StyledLink>
        </BarWrapper>
        <BarWrapper>
          <StyledLink to="/profile">Manage Profile</StyledLink>
        </BarWrapper>
        <LogoutWrapper onClick={this.handleLogout}>Logout</LogoutWrapper>
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
  &:hover {
    text-decoration: underline;
    text-style: bold;
  }
`;

const activeClassName = "active";
const StyledLink = styled(NavLink).attrs({ activeClassName: activeClassName })`
  text-decoration: none;
  color: black;
  padding: 18px 142px 18px 18px;
  &.${activeClassName} {
    text-decoration: underline;
    text-style: bold;
  }
`;

const LogoutWrapper = styled(BarWrapper)`
  position: absolute;
  bottom: 0;
  width: 270px;
  padding: 0 15px;
  border-bottom: none;
  border-top: 1px solid #ccc !important;
`;
