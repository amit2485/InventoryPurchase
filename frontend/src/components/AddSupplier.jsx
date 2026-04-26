import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import axios from 'axios';

export const AddSupplier = ({show,setShow,setSupplier,editSupplier,setEditSupplier}) => {
     const [showToast, setShowToast] = useState(false);
    const [supplierData, setSupplierData] = useState({
    supplierName: "",
    supplierAddress: "",
    supplierContact:"",
    
  });
     const handleChange = (e) => {
       
    const { name, value } = e.target;

     //console.log(name,value);
    setSupplierData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
  if (editSupplier) {
    setSupplierData(editSupplier);
  }
}, [editSupplier]);

  const addSupplier = async(e) => {
    e.preventDefault();
    
    const obj = {
        supplierName:supplierData.supplierName,
        supplierAddress:supplierData.supplierAddress,
        supplierContact:supplierData.supplierContact,
       
    }
    try
    {
        let response
        if(editSupplier){
            response = await axios.put(
            `http://localhost:8081/api/supplier/${editSupplier.supplierId}`,
            obj
        );

        // update UI
        setSupplier(prev =>
            prev.map(p =>
            p.supplierId === editSupplier.supplierId ? response.data : p
            )
        );

        } else {
        //ADD
        response = await axios.post(
            "http://localhost:8081/api/supplier",
            obj
        );

        setSupplier(prev => [...prev, response.data]);
        }
    }catch(error){
        console.log(error)

    }
    setShow(false);
    setEditSupplier(null);

    setSupplierData({
      supplierName: "",
      supplierAddress: "",
      supplierContact: "",
      
    });
    }
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
            Add Supplier
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Supplier Name</Form.Label>
              <Form.Control
                type="text"
                name="supplierName"
                placeholder="enter name"
                onChange={handleChange}
                value={supplierData.supplierName}
              />
            </Form.Group>
           <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Supplier Address</Form.Label>
              <Form.Control
                type="text"
                name="supplierAddress"
                placeholder="enter address"
                autoFocus
                 onChange={handleChange}
                 value={supplierData.supplierAddress}
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Supplier Contact</Form.Label>
              <Form.Control
                type="number"
                name="supplierContact"
                placeholder="enter contact"
                autoFocus
                 onChange={handleChange}
                 value={supplierData.supplierContact}
                 
              />
         </Form.Group>
            <Modal.Footer>
                 <Button variant="primary" onClick={addSupplier} >{editSupplier ? "Edit Supplier" : "Add Supplier" }
            
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

