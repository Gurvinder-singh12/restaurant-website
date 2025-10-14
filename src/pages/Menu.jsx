import { Nav } from "react-bootstrap";
import menuData from "../menuData.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../features/cartSlice";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'

function Menu() {
  const [selectCategory, setSelectCategory] = useState("All");
  const [showCart, setShowCart] = useState(false);
  const navigate=useNavigate
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const category = ["All", "Burger", "Momos", "Pizza", "Drinks"];

  const FilterDishes = menuData.filter(
    (dish) => selectCategory === "All" || dish.category === selectCategory
  );
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const handlePay=()=>{
Swal.fire({
 icon: "success",
    title: "Your order is placed!",
   html: `
      <p>Total Amount: ₹${total}</p>
        `,
  draggable: true
});
}

  return (
    <div className="menu-cards md:h-100">
      <div className="menu-link text-center mb-3">
        <h1 className="text-center mb-4">Our Menu</h1>
        <Nav as="ul" className="justify-content-center">
          {category.map((cat) => (
            <Nav.Item as="li" key={cat}>
              <Nav.Link
                className={selectCategory === cat ? "active-category" : ""}
                onClick={() => setSelectCategory(cat)}
              >
                {cat}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
      {/* Left side Dish Section & Right side Cart Section only for PC & Laptop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT SECTION - DISH LIST */}
        <div className="md:col-span-2 overflow-y-auto max-h-[80vh] md:max-h-[600px] scrollbar-hide space-y-5">
          {FilterDishes.map((dish) => (
            <div
              key={dish.id}
              className="rounded-2xl p-3 shadow-md hover:shadow-yellow-400/30 transition-all duration-300 flex items-center gap-4">
              <img
                src={dish.photo}
                alt={dish.name}
                className="w-28 h-28 object-cover rounded-lg"/>
              <div className="flex flex-col flex-1">
                <h3 className="text-lg font-semibold">{dish.name}</h3>
                <p className="text-sm flex-1">
                  {dish.ingredients}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-400 font-bold">
                    ₹ {dish.price}
                  </span>
                  {cartItems.some((item) => item.id === dish.id) ? (
  <div className="flex items-center gap-2 bg-yellow-500 text-black   hover:bg-yellow-600 rounded-lg transition-all duration-300">
    <button
      onClick={() => dispatch(removeItem(dish.id))}
      className="  px-3 py-1  "
    >
      −
    </button>

    <span >
      {cartItems.find((item) => item.id === dish.id)?.quantity}
    </span>

    <button
      onClick={() => dispatch(addToCart(dish))}
      className=" px-3 py-1 "
    >
      +
    </button>
  </div>
) : (
  <button
    onClick={() => dispatch(addToCart(dish))}
    className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded-lg text-sm transition-all duration-300"
  >
    Add
  </button>
)}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SECTION - CART (Hidden on small) */}
        <div className="hidden md:block overflow-y-auto max-h-[80vh] md:max-h-[600px] scrollbar-hide bg-gray-900 p-6 rounded-2xl shadow-lg h-fit sticky top-10">
          <h2 className="text-xl font-bold mb-4 text-white">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-white">🛒 Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              
              <div
                key={index}
                className="flex justify-between items-center text-white mb-3 border-b border-gray-700 pb-2"
              >
              <div className="dish-name">
        <h5>{item.name}</h5>
        </div>
        <div className="quantity-btn">
          <div className="bg-yellow-500 hover:bg-yellow-600 text-black  rounded">       
          <button
          onClick={() => dispatch(removeItem(item.id))}
          className=" px-2 "
        >
          −
        </button>
        <span className="text-sm mx-1 ">{item.quantity}</span>
        <button
          onClick={() => dispatch(addToCart(item))}
          className="px-2"
        >
          +
        </button>
        </div>
      {/* </div> */}
      <div className="price">
                  <span className="text-white mx-2">₹ {item.price* item.quantity}</span>
                  </div>
                  </div>
              </div>
            
            ))
          )}
          {cartItems.length > 0 && (
            <div>
                <div className="flex justify-between text-green-400">
              <p>Total</p>
              <span>₹ {cartItems.reduce((acc,item)=>acc + item.price*item.quantity,0)}</span>
              </div>
            <button onClick={handlePay} className="bg-yellow-500 hover:bg-yellow-600 text-black w-full py-2 mt-4 rounded-lg font-semibold transition-all duration-300">
             Checkout 
            </button>
            </div>
          )}
        </div>
      </div>

      {/* ---- Mobile Cart Button ---- */}
      <div className="fixed bottom-6 right-6 md:hidden">
        <button
          onClick={() => setShowCart(true)}
          className="bg-yellow-500 text-black font-bold px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
        >
          View Cart ({cartItems.length})
        </button>
      </div>

      {/* ---- Cart Modal (Mobile Only) ---- */}
      {showCart && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center  items-start pt-20 z-50">
    <div className="bg-gray-900 text-white p-6 rounded-2xl w-[90%] max-w-sm my-auto max-h-[75vh] overflow-y-auto scrollbar-hide">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-yellow-400">Your Cart</h2>
              <button onClick={() => setShowCart(false)} className="text-white">
                ✖
              </button>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-white text-center mb-3">
                🛒 Your cart is empty
              </p>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-3 border-b border-gray-700 pb-2"
                >
                 {/* <div className="flex items-center gap-2"> */}
                 <div className="dish-name">
        <h5>{item.name}</h5>
        </div>
      <div className="quantity-btn">
          <div className="bg-yellow-500 hover:bg-yellow-600 text-black  rounded">       
          <button
          onClick={() => dispatch(removeItem(item.id))}
          className=" px-2 "
        >
          −
        </button>
        <span className="text-sm mx-1 ">{item.quantity}</span>
        <button
          onClick={() => dispatch(addToCart(item))}
          className="px-2"
        >
          +
        </button>
        </div>
      {/* </div> */}
      <div className="price">
                  <span className="text-white mx-2">₹ {item.price* item.quantity}</span>
                  </div>
                  </div>
 
                </div>
              ))
            )}
            {cartItems.length > 0 && (
              <div>
                <div className="flex justify-between text-green-400">
              <p>Total</p>
              <span>₹ {cartItems.reduce((acc,item)=>acc + item.price*item.quantity,0)}</span>
              </div>
              <button onClick={handlePay} className="bg-yellow-500 hover:bg-yellow-600 text-black w-full py-2 mt-2 rounded-lg font-semibold transition-all duration-300">
                Checkout
              </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    // </div>
  );
}

export default Menu;
