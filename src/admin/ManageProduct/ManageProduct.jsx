import React, { Component } from "react";
import styled from "styled-components";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/waste-bin.svg";
import AddProduct from "../AddProduct/AddProduct";

export default class ManageProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ open: true });
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {
    return (
      <Wrapper>
        <Title>Manage Product</Title>
        <AddButton onClick={this.openModal}>Add New Product</AddButton>
        <AddProduct open={this.state.open} onClose={this.closeModal} />
        <Table>
          <thead>
            <tr>
              <HeadCell>No</HeadCell>
              <HeadCell>Product Name</HeadCell>
              <HeadCell>Product Price</HeadCell>
              <HeadCell>Product Desc</HeadCell>
              <HeadCell>Product Image</HeadCell>
              <HeadCell>Manage Product</HeadCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <BodyCell>1</BodyCell>
              <BodyCell>Handuk Sutra</BodyCell>
              <BodyCell>Rp.100.000</BodyCell>
              <DescColumn>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </DescColumn>
              <BodyCell>
                <ProductImg src="https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/4/_13485964.jpg?h=365&w=240&dpr=2&quality=45&fit=fill&fm=jpg" />
              </BodyCell>
              <BodyCell>
                <IconImg onClick={this.openModal} src={EditIcon} />
                <AddProduct open={this.state.open} onClose={this.closeModal} />
                <IconImg src={DeleteIcon} />
              </BodyCell>
            </tr>
          </tbody>
        </Table>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  text-align: center;
`;

const AddButton = styled.button`
  width: 130px;
  padding: 7px 5px;
  text-align: center;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  background: #484848;
  margin: 0 20px;
  &:hover {
    background: #888888;
  }
`;
const Table = styled.table`
  margin: 20px auto;
  border-collapse: collapse;
`;

const HeadCell = styled.th`
  padding: 5px;
  text-align: center;
  border: 1px solid black;
  border-collapse: collapse;
`;
const BodyCell = styled.td`
  padding: 5px;
  text-align: left;
  border: 1px solid black;
`;
const DescColumn = styled(BodyCell)`
  width: 550px;
`;
const ProductImg = styled.img`
  width: 100px;
  height: 100px;
`;

const IconImg = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 10px auto;
`;
