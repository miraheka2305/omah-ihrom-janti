import React, { Component } from "react";
// import styled from "styled-components";
// import NavBar from "./components/NavBar/NavBar";
// import UserMain from "./scenes/UserMain/UserMain";
// import Footer from "./components/Footer/Footer";
// import Login from "./admin/Login/Login";
import ManageProduct from "./admin/ManageProduct/ManageProduct";

class App extends Component {
  render() {
    return (
      // <div>
      //   <NavBar />
      //   <UserMain />
      //   <FooterWrapper>
      //     <Footer />
      //   </FooterWrapper>
      // </div>
      // <Login />
      <ManageProduct />
    );
  }
}

export default App;

// const FooterWrapper = styled.div`
//   width: 100%;
//   height: 225px;
// `;
