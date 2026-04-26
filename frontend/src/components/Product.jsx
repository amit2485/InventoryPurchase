import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { AddProduct } from './AddProduct';
import { FaEdit, FaTrash } from "react-icons/fa";

export const Product = () => {

  const [product, setProduct] = useState([]); 
  const [show, setShow] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const fetchData = async() => {
      let res = await axios.get("http://localhost:8081/api/product");
      let data = await res.data;
      console.log(data);
      setProduct(data)

  }
useEffect(() => {

fetchData();


},[])




const handleEdit = (product) => {
  console.log("edit "+product);
  setEditProduct(product); // store selected product
  setShow(true);    
  
}

const handleDelete = async(id) => {
   try {
    const response = await axios.delete(
      `http://localhost:8081/api/product/${id}`
    );

    console.log(response.status); // 200 or 204

    // ✅ update UI instantly (no refresh)
    setProduct(prev => prev.filter(p => p.productId !== id));

  } catch (error) {
    console.error("Delete failed:", error);
  }
}

  return (
    <div>
        <h1 style={{marginLeft:"20px",alignItems:"center"}}>Product</h1>
        <div style={{display:"flex",justifyContent:"flex-end",marginRight:"40px"}}>
           <Button variant="primary" onClick={() => setShow(true)}>ADD Product</Button>
        </div>
        <div style={{padding:"20px 30px 0px 30px"}}>
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {product.map((product,index) => {

          return (<tr>
          <td>{index + 1}</td>
          <td>{product.productName}</td>
          <td>{product.productCategory}</td>
          <td>{product.productPrice}</td>
          <td>{product.productQuantity}</td>
          <td style={{ display: "flex", gap: "10px" }}>
        <FaEdit 
          style={{ cursor: "pointer", color: "blue" }} 
          onClick={() => handleEdit(product)}
        />

        <FaTrash 
          style={{ cursor: "pointer", color: "red" }} 
          onClick={() => handleDelete(product.productId)}
        />
      </td>
        </tr>)
        })}
      
      </tbody>
    </Table>
        </div>
        <AddProduct show={show} setShow={setShow} setProduct={setProduct} editProduct={editProduct}
  setEditProduct={setEditProduct}/>
    </div>
  )
}
