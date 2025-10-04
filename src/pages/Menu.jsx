import { Row, Col, Button, Nav } from "react-bootstrap";
import menuData from "../menuData.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

function Menu() {
  const [selectCategory, setSelectCategory] = useState("All");
  const category = ["All", "Burger", "Momos", "Pizza", "Drinks"];
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const FilterDishes = menuData.filter(
    (dish) => selectCategory === "All" || dish.category === selectCategory
  );

  return (
    <div className="menu-cards">
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
      <Row>
        {/* ---------- LEFT SIDE MENU ---------- */}
        <Col md={8}>
          <div className="dish-list">
            {FilterDishes.map((dish) => (
              <div className="dish-item" key={dish.id}>
                <img src={dish.photo} alt={dish.name} className="dish-img" />
                <div className="dish-info">
                  <h3>{dish.name}</h3>
                  <p>{dish.ingredients}</p>
                </div>

                <div className="dish-action">
                  <span className="price">₹ {dish.price}</span>
                  <Button
                    variant="warning"
                    onClick={() => dispatch(addToCart(dish))}
                  >
                    <i className="bi bi-cart-plus"></i> Add
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Col>

        {/* ---------- RIGHT SIDE CART ---------- */}
        <Col md={4}>
          <div className="cart-section">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
              <p className="empty-cart">🛒 Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div className="cart-item" key={index}>
                  <div>
                    <h5>{item.name}</h5>
                    <span>₹ {item.price}</span>
                  </div>
                </div>
              ))
            )}
            {cartItems.length > 0 && (
              <button className="btn-warning py-2 font-size-16 font-weight-900 text-black  text-center btn w-100">
                Checkout
              </button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Menu;
