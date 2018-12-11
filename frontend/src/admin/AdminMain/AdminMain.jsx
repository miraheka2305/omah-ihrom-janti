import React, { Component } from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import ManageProfile from "../ManageProfile/ManageProfile";
import ManageProduct from "../ManageProduct/ManageProduct";
class AdminMain extends Component {
  render() {
    return (
      <Wrapper>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ComponentWrapper>
          <Switch>
            <Route exact path="/admin-home" component={ManageProduct} />
            <Route path="/profile" component={ManageProfile} />
          </Switch>
        </ComponentWrapper>
      </Wrapper>
    );
  }
}

export default withRouter(AdminMain);
const Wrapper = styled.div``;
const SidebarWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`;
const ComponentWrapper = styled.div`
  display: inline-block;
  width: calc(100% - 300px);
`;
