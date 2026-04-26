import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { AddSupplier } from './AddSupplier';

export const Supplier = () => {
   const [supplier, setSupplier] = useState([]); 
    const [show, setShow] = useState(false);
    const [editSupplier, setEditSupplier] = useState(null);
  
    const fetchData = async() => {
        let res = await axios.get("http://localhost:8081/api/supplier");
        let data = await res.data;
        console.log(data);
        setSupplier(data)
  
    }
  useEffect(() => {
  
  fetchData();
  
  
  },[])
  
  
  
  
  const handleEdit = (supplier) => {
    console.log("edit "+supplier);
    setEditSupplier(supplier); // store selected product
    setShow(true);    
    
  }
  
  const handleDelete = async(id) => {
     try {
      const response = await axios.delete(
        `http://localhost:8081/api/supplier/${id}`
      );
  
      console.log(response.status); // 200 or 204
  
      // ✅ update UI instantly (no refresh)
      setSupplier(prev => prev.filter(p => p.supplierId !== id));
  
    } catch (error) {
      console.error("Delete failed:", error);
    }
  }
  
  return (
    <div>
        <h1 style={{marginLeft:"20px",alignItems:"center"}}>Supplier</h1>
        <div style={{display:"flex",justifyContent:"flex-end",marginRight:"40px"}}>
           <Button variant="primary" onClick={() => setShow(true)}>ADD Supplier</Button>
        </div>
        <div style={{padding:"20px 30px 0px 30px"}}>
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {supplier.map((supplier,index) => {

          return (<tr>
          <td>{index + 1}</td>
          <td>{supplier.supplierName}</td>
          <td>{supplier.supplierAddress}</td>
          <td>{supplier.supplierContact}</td>
          <td style={{ display: "flex", gap: "10px" }}>
        <FaEdit 
          style={{ cursor: "pointer", color: "blue" }} 
          onClick={() => handleEdit(supplier)}
        />

        <FaTrash 
          style={{ cursor: "pointer", color: "red" }} 
          onClick={() => handleDelete(supplier.supplierId)}
        />
      </td>
        </tr>)
        })}
      
      </tbody>
    </Table>
        </div>
        <AddSupplier show={show} setShow={setShow} setSupplier={setSupplier} editSupplier={editSupplier}
  setEditSupplier={setEditSupplier}/>
    </div>
  )
}
