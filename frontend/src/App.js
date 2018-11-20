import React, { Component } from "react";
import styled from "styled-components";
// import NavBar from "./components/NavBar/NavBar";
// import UserMain from "./scenes/UserMain/UserMain";
// import Footer from "./components/Footer/Footer";
// import Sidebar from "./admin/Sidebar/Sidebar";
import AdminMain from "./admin/AdminMain/AdminMain";
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
      <AdminMain />
    );
  }
}

export default App;

// const FooterWrapper = styled.div`
//   position: relative;
//   bottom: 0;
//   width: 100%;
// `;
