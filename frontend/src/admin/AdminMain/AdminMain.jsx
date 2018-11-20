import React, { Component } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import ManageProduct from "../ManageProduct/ManageProduct";
export default class AdminMain extends Component {
  render() {
    return (
      <Wrapper>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ComponentWrapper>
          <ManageProduct />
        </ComponentWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
const SidebarWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`;
const ComponentWrapper = styled.div`
  display: inline-block;
  width: calc(100% - 300px);
`;
