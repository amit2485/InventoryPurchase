
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import axios from 'axios';

export const AddPurchase = ({show,setShow,fetchData}) => {

     const [showToast, setShowToast] = useState(false);

     const [products, setProducts] = useState([]);
    const [suppliers, setSuppliers] = useState([]);

    const [purchaseData, setPurchaseData] = useState({
    productName: "",
    supplierName: "",
    purchasePrice: "",
    purchasedQuantity: "",
    purchaseDate: ""
  });

      const fetchAll = async () => {
      try {
        const [pRes, sRes] = await Promise.all([
          axios.get("http://localhost:8081/api/product"),
          axios.get("http://localhost:8081/api/supplier")
        ]);

        setProducts(pRes.data);
        setSuppliers(sRes.data);

      } catch (err) {
        console.error(err);
      }
    };

    useEffect(() => {
        fetchAll()
    })

     const handleChange = (e) => {
    const { name, value } = e.target;
    setPurchaseData(prev => ({ ...prev, [name]: value }));
  };

   const handleSave = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8081/api/purchase", {
        productName: purchaseData.productName ,
        supplierName:  purchaseData.supplierName ,
        purchasePrice: purchaseData.purchasePrice,
        purchasedQuantity: purchaseData.purchasedQuantity,
        purchaseDate: purchaseData.purchaseDate
      });

      setShow(false);
      fetchData(); // 🔥 refresh table

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
         <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add Purchase</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSave}>

          {/* Product */}
          <Form.Group className="mb-3">
            <Form.Label>Product</Form.Label>
            <Form.Select name="productName" onChange={handleChange}>
              <option value="">Select Product</option>
              {products.map(p => (
                <option key={p.productId} value={p.productName}>
                  {p.productName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          {/* Supplier */}
          <Form.Group className="mb-3">
            <Form.Label>Supplier</Form.Label>
            <Form.Select name="supplierName" onChange={handleChange}>
              <option value="">Select Supplier</option>
              {suppliers.map(s => (
                <option key={s.supplierId} value={s.supplierName}>
                  {s.supplierName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          {/* Price */}
          <Form.Group className="mb-3">
            <Form.Label>Purchase Price</Form.Label>
            <Form.Control
              type="number"
              name="purchasePrice"
              onChange={handleChange}
            />
          </Form.Group>

          {/* Quantity */}
          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="purchasedQuantity"
              onChange={handleChange}
            />
          </Form.Group>

          {/* Date */}
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="purchaseDate"
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit">Save</Button>

        </Form>
      </Modal.Body>
    </Modal>
      
    </div>
  )
}
