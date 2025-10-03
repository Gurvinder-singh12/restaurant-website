import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal , Button } from 'react-bootstrap';
function Cart() {
  const [showmodal,setShowModal]=useState(false);
    const countitems= useSelector((state)=>state.cart.items.length);
const cartItems=useSelector((state)=>state.cart.items)
    const handleClose =()=> setShowModal(false);
    const handleShow=()=>setShowModal(true);
  return (
    <>
        <div className='order-link'>
        <div className="cart-icon mx-4" >
  <button className='text-warning bg-black border-0 m-2' onClick={handleShow}>Order Now</button>
              <i className="bi bi-cart-fill fs-4"></i>
  <span className="cart-badge">{countitems}</span>
          </div>
    </div>
     <Modal show={showmodal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.map((item)=>(
            <div key={item.id}>
            <img src={item.photo} style={{width:"40px", height:"50px"}}/>
            <span>{item.name}</span>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>
      </>

  )
}

export default Cart
