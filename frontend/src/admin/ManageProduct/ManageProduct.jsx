import React, { Component } from "react";
import styled from "styled-components";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/waste-bin.svg";
import AddProduct from "../AddProduct/AddProduct";
import ModalConfirmation from "../../components/ModalConfirmation/ModalConfirmation";

export default class ManageProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openConfirm: false,
      products: [],
      item: {}
    };
    this.openAddModal = this.openAddModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.openConfirmModal = this.openConfirmModal.bind(this);
    this.onDeleteProduct = this.onDeleteProduct.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeConfirmModal = this.closeConfirmModal.bind(this);
  }

  getProductData() {
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    }
    return fetch('http://localhost:8000/api/products', options)
    .then(response => {
      return response.json();
    });
  }

  componentDidMount() {
    this.getProductData().then(response => {
      let productsData = response.Data;
      let products = [];
      if (productsData !== null) {
        productsData.forEach( product => {
          products.push({
            id : product.Id,
            name: product.Name,
            price : product.Price,
            description: product.Description,
            image : 'http://localhost:8000/api' + product.Images[0].Url
          });
        })
      }
      this.setState({ 
        products : products
      });
    })
  }

  openAddModal() {
    this.setState({
      open: true,
      item: {
        id: "",
        name: "",
        price: "",
        desc: "",
        image: ""
      }
    });
  }

  openEditModal(product) {
    this.setState({ open: true, item: product });
  }

  openConfirmModal() {
    this.setState({
      openConfirm: true
    });
  }

  closeModal() {
    this.setState({ open: false });
  }

  closeConfirmModal() {
    this.setState({
      openConfirm: false
    });
  }

  onDeleteProduct(product) {
    let products = [...this.state.products];
    let idxProduct = products.indexOf(product);
    if (idxProduct !== -1) {
      products.splice(idxProduct, 1);
      this.setState({
        products: products,
        openConfirm: false
      });
    }
  }

  postProduct(newProduct){

    let formData = new FormData();
    formData.append('file_uploads', newProduct.image);
    formData.append('name', newProduct.name);
    formData.append('price', newProduct.price);
    formData.append('description', newProduct.desc);

    const options = {
      method: 'POST',
      headers: {
        'Authorization': sessionStorage.getItem("jwtToken"), 
        'Accept': 'application/json, text/plain, */*',
      },
      body: formData
    }
    return fetch('http://localhost:8000/api/products', options)
    .then(response => {
      return response.json();
    });
  }

  handleSubmit(newItem) {

    const newArrProducts = this.state.products.slice();
    if(newItem.id !== ""){
      console.log('ga null tjuy');
    }
    this.postProduct(newItem).then( response => {
      newItem.id = response.Data.Id;
      newItem.image = 'http://localhost:8000/api' + response.Data.Images[0].Url;
    }).then( () => {
      newArrProducts.push(newItem);
    }).then( () => {
      this.setState({
        products: newArrProducts
      });
    }).then(() => {
      this.closeModal();
    })

    // const newArrProducts = this.state.products.slice();
    // if (indexProduct !== -1) {
    //   newArrProducts[indexProduct] = newItem;
    // } else {
    //   newArrProducts.push(newItem);
    //   console.log(newArrProducts);
    // }
    // this.setState({
    //   products: newArrProducts
    // });
    // this.closeModal();



    // // console.log(indexProduct);
    // const newArrProducts = this.state.products.slice();
    // if (indexProduct !== -1) {
    //   newArrProducts[indexProduct] = newItem;
    // } else {
    //   newArrProducts.push(newItem);
    //   console.log(newArrProducts);
    // }
    // this.setState({
    //   products: newArrProducts
    // });
    // this.closeModal();
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
                        src={EditIcon}
                        onClick={() => {
                          this.openEditModal(product);
                        }}
                      />
                      <IconImg
                        src={DeleteIcon}
                        onClick={this.openConfirmModal}
                      />
                      {this.state.openConfirm ? (
                        <ModalConfirmation
                          open={this.state.openConfirm}
                          onClose={this.closeConfirmModal}
                          product={product}
                          onDelete={product => this.onDeleteProduct(product)}
                        />
                      ) : (
                        ""
                      )}
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
