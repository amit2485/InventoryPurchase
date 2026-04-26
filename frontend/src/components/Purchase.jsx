import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { AddPurchase } from './AddPurchase';

export const Purchase = () => {
   const [purchase, setPurchase] = useState([]); 
    const [show, setShow] = useState(false);
   // const [editProduct, setEditProduct] = useState(null);
  
    const fetchData = async() => {
        let res = await axios.get("http://localhost:8081/api/purchase");
        let data = await res.data;
        console.log(data[0].product);
        setPurchase(data)
  
    }
  useEffect(() => {
  fetchData();
  },[])
  const handleDelete = async(id) => {
    console.log("id "+id);
   try {
    const response = await axios.delete(
      `http://localhost:8081/api/purchase/${id}`
    );
    console.log(response.status); // 200 or 204
    // ✅ update UI instantly (no refresh)
    setPurchase(prev => prev.filter(p => p.purchaseId !== id));
    fetchData();

  } catch (error) {
    console.error("Delete failed:", error);
  }
}
  return (
    <div>
        <h1 style={{marginLeft:"20px",alignItems:"center"}}>Purchase</h1>
        <div style={{display:"flex",justifyContent:"flex-end",marginRight:"40px"}}>
           <Button variant="primary" onClick={() => setShow(true)}>Make Purchase</Button>
        </div>
        <div style={{padding:"20px 30px 0px 30px"}}>
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Supplier Name</th>
          <th>Product Name</th>
          <th>Puchase Price</th>
          <th>Purchase Quantity</th>
          <th>Purchase Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {purchase.map((item,index) => {

          return (<tr>
          <td>{index + 1}</td>
          <td>{item.product.productName}</td>
          <td>{item.supplier.supplierName}</td>
          <td>{item.purchasePrice}</td>
          <td>{item.purchasedQuantity}</td>
          <td>{item.purchaseDate}</td>
          <td style={{ display: "flex", gap: "10px" }}>
        <FaEdit 
          style={{ cursor: "pointer", color: "blue" }} 
         
        />

        <FaTrash Button
          style={{ cursor: "pointer", color: "red" }} 
          onClick={() => handleDelete(item.purchaseId)}
          
        />
      </td>
        </tr>)
        })}
      
      </tbody>
    </Table>
        </div>
         <AddPurchase show={show} setShow={setShow} fetchData={fetchData} />
    </div>
  )
}
