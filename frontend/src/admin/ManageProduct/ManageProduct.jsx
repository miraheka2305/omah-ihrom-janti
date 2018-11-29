import React, { Component } from "react";
import styled from "styled-components";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/waste-bin.svg";
import AddProduct from "../AddProduct/AddProduct";

export default class ManageProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      products: [
        {
          id: 0,
          name: "Handuk Sutra",
          price: "100000",
          desc:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image:
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/4/_13485964.jpg?h=365&w=240&dpr=2&quality=45&fit=fill&fm=jpg"
        },
        {
          id: 1,
          name: "Kain Rayon",
          price: "50000",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image:
            "http://bahankain.com/wp-content/uploads//2014/12/pakaian-berbahan-wool.jpg"
        },
        {
          id: 2,
          name: "Kain Wol",
          price: "80000",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image:
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/4/_13485964.jpg?h=365&w=240&dpr=2&quality=45&fit=fill&fm=jpg"
        }
      ],
      item: {}
    };
    this.openAddModal = this.openAddModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openAddModal() {
    let id = this.state.products.length;
    this.setState({
      open: true,
      item: {
        id: id,
        name: "",
        price: "",
        desc: "",
        image: ""
      }
    });
  }

  closeModal() {
    this.setState({ open: false });
  }

  openEditModal(product) {
    this.setState({ open: true, item: product });
  }

  handleSubmit(newItem) {
    var indexProduct = this.state.products.findIndex(function(item) {
      return item.id === newItem.id;
    });
    const newArrProducts = this.state.products.slice();
    if (indexProduct !== -1) {
      newArrProducts[indexProduct] = newItem;
    } else {
      newArrProducts.push(newItem);
    }
    this.setState({
      products: newArrProducts
    });
    this.closeModal();
  }

  render() {
    return (
      <Wrapper>
        <Title>Manage Product</Title>
        <AddButton onClick={this.openAddModal}>Add New Product</AddButton>
        <TableWrapper>
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
              {this.state.products.map((product, index) => {
                return (
                  <tr key={product.id}>
                    <BodyCell>{index + 1}</BodyCell>
                    <BodyCell>{product.name}</BodyCell>
                    <BodyCell>{product.price}</BodyCell>
                    <DescColumn>{product.desc}</DescColumn>
                    <BodyCell>
                      <ProductImg src={product.image} />
                    </BodyCell>
                    <BodyCell>
                      <IconImg
                        onClick={() => {
                          this.openEditModal(product);
                        }}
                        src={EditIcon}
                      />
                      <IconImg src={DeleteIcon} />
                    </BodyCell>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableWrapper>
        {this.state.open ? (
          <AddProduct
            open={this.state.open}
            item={this.state.item}
            onClose={this.closeModal}
            onSubmit={newItem => this.handleSubmit(newItem)}
          />
        ) : (
          ""
        )}
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

const TableWrapper = styled.div`
  max-height: 658px;
  overflow-y: auto;
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
