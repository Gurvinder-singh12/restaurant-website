import Button from "react-bootstrap/Button";
import { Card, Row, Col, Nav } from "react-bootstrap";
import menuData from "../menuData.json";
import { useState } from "react";

function Menu() {
  const [selectCategory, setSelectCategory] = useState("All");
  const category = ["All", "Burger", "Momos", "Pizza", "Drinks"];
  const FilterDishes = menuData.filter(
    (dish) => selectCategory === "All" || dish.category === selectCategory
  );
  return (
    <>
      <div className="menu-cards">
        <div className="menu-link">
          <h4>Our Menu</h4>
          <Nav defaultActiveKey="/All" as="ul">
            {category.map((cat) => (
              <Nav.Item as="li">
                <Nav.Link className="text-black " onClick={() => setSelectCategory(cat)}>
                  {cat}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <Row md={3}>
          {FilterDishes.map((dish) => (
            <Col>
              <Card
                border="warning" 
                bg="dark"
                text="light"
                style={{
                  width: "18rem",
                  height: "21rem",
                  marginBottom: "1rem",
                  borderRadius:"20px"
                }}
              >
                <Card.Img
                  variant="top"
                  className="card-dishimg"
                  src={dish.photo}
                />
                <Card.Body>
                  <Card.Title>{dish.name}</Card.Title>
                  <Card.Text>{dish.ingredients}</Card.Text>

                  {/* <Button variant="primary">Add</Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Menu;
