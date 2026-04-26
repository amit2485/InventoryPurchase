import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import axios from 'axios';


export const AddProduct = ({show,setShow,setProduct,editProduct,setEditProduct}) => {

    const [showToast, setShowToast] = useState(false);
    const [productData, setProductData] = useState({
    productName: "",
    productCategory: "",
    productPrice:"",
    productQuantity:""
  });
     const handleChange = (e) => {
       
    const { name, value } = e.target;

     //console.log(name,value);
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
  if (editProduct) {
    setProductData(editProduct);
  }
}, [editProduct]);

  const addProduct = async(e) => {
    e.preventDefault();
    
    const obj = {
        productName:productData.productName,
        productCategory:productData.productCategory,
        productPrice:productData.productPrice,
        productQuantity:productData.productQuantity
    }
    try
    {
        let response
        if(editProduct){
            response = await axios.put(
            `http://localhost:8081/api/product/${editProduct.productId}`,
            obj
        );

        // update UI
        setProduct(prev =>
            prev.map(p =>
            p.productId === editProduct.productId ? response.data : p
            )
        );

        } else {
        //ADD
        response = await axios.post(
            "http://localhost:8081/api/product",
            obj
        );

        setProduct(prev => [...prev, response.data]);
        }
    }catch(error){
        console.log(error)

    }
    setShow(false);
    setEditProduct(null);

    setProductData({
      productName: "",
      productCategory: "",
      productPrice: "",
      productQuantity: ""
    });
    }
    // try {
    //      response = await axios.post(
    //         "http://localhost:8081/api/product",
    //         obj,
    //         { headers: { "Content-Type": "application/json" } }
    //     );
    //     setProduct(prev => [...prev, response.data]);
    //      //console.log("status "+response.status);
    //      setShow(false);
    //     setTimeout(() => {
    //         setShowToast(true);
    //         }, 200);
      
        
    // } catch (error) {
    //     console.error("Failed:", error);
    // }
   

  
  return (
    <div>
         <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                placeholder="enter name"
                onChange={handleChange}
                value={productData.productName}
              />
            </Form.Group>
           <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Product Category</Form.Label>
              <Form.Control
                type="text"
                name="productCategory"
                placeholder="enter category"
                autoFocus
                 onChange={handleChange}
                 value={productData.productCategory}
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                name="productPrice"
                placeholder="enter price"
                autoFocus
                 onChange={handleChange}
                 value={productData.productPrice}
                 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Product Quantity</Form.Label>
              <Form.Control
                type="number"
                name="productQuantity"
                placeholder="enter quantity"
                autoFocus
                 onChange={handleChange}
                 value={productData.productQuantity}
                 
              />
            </Form.Group>
            <Modal.Footer>
                 <Button variant="primary" onClick={addProduct} >
            Add Product
          </Button>
            </Modal.Footer>
           
           
          </Form>
           <ToastContainer position="top-end" className="p-3">
  <Toast
    bg="success"
    show={showToast}
    onClose={() => setShowToast(false)}
    delay={2000}
    autohide
  >
    <Toast.Body style={{ color: "white" }}>
      Product added successfully ✅
    </Toast.Body>
  </Toast>
</ToastContainer>
        </Modal.Body>
      </Modal>
      
    </div>
  )
}
