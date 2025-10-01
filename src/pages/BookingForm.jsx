import {  toast } from "react-toastify";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2'
function BookingForm() {
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
    <Form className="p-4 bg-dark m-auto ml-3 border bookingform rounded shadow-sm">
      <Form.Group>
        <Form.Label className="text-warning">Name</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formdata.username}
           onChange={handleChange}
          placeholder="Enter your name"
        />
        {/* {errors.username && <p style={{color:"red"}}>{errors.username}</p>} */}
      </Form.Group>

      <Form.Group>
        <Form.Label className="text-warning">Phone Number</Form.Label>
        <Form.Control
          type="tel"
          name="phonenumber"
          value={formdata.phonenumber}
           onChange={handleChange}
          placeholder="Enter phone number"
        />
        {/* {errors.phonenumber && <p style={{color:"red"}}>{errors.phonenumber}</p>} */}
      </Form.Group>

      <Form.Group>
        <Form.Label className="text-warning">No. of Persons</Form.Label>
        <Form.Control
          type="number"
          name="persons"
          value={formdata.persons}
          onChange={handleChange}
          placeholder="Number of persons"
        />
        {/* {errors.persons && <p style={{color:"red"}}>{errors.persons}</p>} */}
      </Form.Group>

      <Form.Group>
        <Form.Label className="text-warning">Date</Form.Label>
        <Form.Control type="date" name="date" value={formdata.date} onChange={handleChange} />
        {/* {errors.date && <p style={{color:"red"}}>{errors.date}</p>} */}
      </Form.Group>

      <Form.Group>
        <Form.Label className="text-warning">Time</Form.Label>
        <Form.Control type="time" name="time" value={formdata.time} onChange={handleChange} />
        {/* {errors.time && <p style={{color:"red"}}>{errors.time}</p>} */}
      </Form.Group>

      <div className="order-btn">
        <Button className="mx-auto" onClick={handleSubmit} variant="warning" >
          Book Table
        </Button>
      </div>
    </Form>
  );
}

export default BookingForm;
