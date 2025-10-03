import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const countitems= useSelector((state)=>state.cart.items.length);
  return (
    <div className='order-link'>
        <div className="cart-icon mx-4" >
  <span className='text-warning'>Order Now</span>
              <i className="bi bi-cart-fill fs-4"></i>
  <span className="cart-badge">{countitems}</span>
          </div>
    </div>
  )
}

export default Cart
