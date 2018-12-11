import React, { Component } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Home from "../Home/Home";
import About from "../About/About";
import Products from "../Products/Products";
import ContactMe from "../ContactMe/ContactMe";

export default class UserMain extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={ContactMe} />
        </Switch>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </div>
    );
  }
}
const FooterWrapper = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
`;
