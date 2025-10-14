import {  toast } from "react-toastify";
import React, { useState } from "react";
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import Swal from 'sweetalert2';

function BookingForm({show,setShow}) {
  // const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [formdata, SetFormData] = useState({
    username: "",
    phonenumber: "",
    persons: "",
    date: "",
    time: "",
  });
const[errors,SetErrors]=useState({});

  const handleChange = (e) => {
    const {name,value}=e.target;
    SetFormData({
      ...formdata,
      [name]:value,
    })
  };

  // const validationForm=(data)=>{
  //   let newErrors={};
  //    if (!formdata.username || !formdata.phonenumber || !formdata.persons || !formdata.date || !formdata.time) {
  //   toast.error(" Please fill all fields!");
  // }
  //   if(!data.phonenumber){
  //     newErrors.phonenumber="phone number is required";
  //    } else if(!data.phonenumber.length < 9){
  //       newErrors.phonenumber="Enter valid phone number"
  //     }
  //     if(!data.persons){
  //     newErrors.persons="Enter No Of Persons";
  //   }
  //   if(!data.date){
  //     newErrors.date="Choose a Date";
  //   }
  //   if(!data.time){
  //     newErrors.time="Select Time";
  //   }
  //     return newErrors;
  // }
 const handleSubmit = (e) => {
  e.preventDefault();

  if (!formdata.username || !formdata.phonenumber || !formdata.date || !formdata.time) {
    toast.error(" Please fill all required fields!");
    return;
  }

  if (formdata.phonenumber.length !== 10) {
    toast.error(" Phone number must be 10 digits!");
    return;
  }

  if (formdata.persons <= 0) {
    toast.error(" Number of persons must be at least 1!");
    return;
  }

  // Success case
  toast.success(" Booking submitted successfully!");
  console.log(formdata);

  // Reset form
  SetFormData({
    username: "",
    phonenumber: "",
    persons: "",
    date: "",
    time: "",
  });
};

  return (
    <>
          <Modal show={show} onHide={handleClose} centered>
  <Modal.Header closeButton>
    <Modal.Title className="text-warning">Book Your Table</Modal.Title>
  </Modal.Header>
  <Modal.Body className="p-4">
    <Form>
      <Row className="mb-3">
        <Col>
          <Form.Label className="text-warning">Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formdata.username}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </Col>
        <Col>
          <Form.Label className="text-warning">Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phonenumber"
            value={formdata.phonenumber}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={4}>
          <Form.Label className="text-warning">No. of Persons</Form.Label>
          <Form.Control
            type="number"
            name="persons"
            value={formdata.persons}
            onChange={handleChange}
            placeholder="1"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="text-warning">Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formdata.date}
            onChange={handleChange}
          />
        </Col>
        <Col md={4}>
          <Form.Label className="text-warning">Time</Form.Label>
          <Form.Control
            type="time"
            name="time"
            value={formdata.time}
            onChange={handleChange}
          />
        </Col>
      </Row>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="warning" onClick={handleSubmit}>
      Book Table
    </Button>
  </Modal.Footer>
</Modal>

    </>

  )
}

export default BookingForm;
