import { Carousel, Button, Card, NavLink } from "react-bootstrap";
import home1image from "../assets/6886efa1f87e23af38fea5ecd1c6d33c.avif";
import home2image from "../assets/delicious-pizza-studio_23-2151846558.jpg";
import home3image from "../assets/pngtree-golden-burger-against-black-background-3d-rendering-and-illustration-image_3766152.jpg";
import aboutImg from "../assets/resturantImg.png";
import specialDish from "../specialDishes.json";
import { useNavigate } from "react-router";
import Marquee from "react-fast-marquee";
const Home = () => {
  const navigate=useNavigate();

  const viewFullMenu=()=>{
    navigate("/menu");
  }
const goToAbout=()=>{
  navigate("/team")
}

  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100  carousel-img" src={home1image} />
          <Carousel.Caption>
            <h3>Fast Food Restaurant</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={home2image} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={home3image} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="about-section">
        <div className="about-text">
          <h1 style={{display:"flex",  margin:"auto"}}>About Us</h1>
          <p>
            Welcome to Apna Restaurant, where taste meets tradition. We serve
            freshly prepared dishes made with quality ingredients, bringing you
            the perfect mix of flavors and comfort. With a cozy ambience and
            dedicated chefs, we make every meal a memorable experience.
            <br />
            <button onClick={goToAbout}>Read More.....</button>
          </p>
        </div>
        <div className="about-img">
          <img alt="resturant-img" src={aboutImg} />
        </div>
      </div>
      <div className="dish-section">
        <div className="section-name" style={{display:"flex"}}>
        <h1 style={{ marginLeft: "7rem",fontSize:"30px" }}>Special Dishes</h1>
        </div>
        <div className="special-Dishes">
          {/* <Marquee pauseOnHover={true} speed={60}> */}
          {specialDish.map((dish) => (
            <Card
              border="warning"
              bg="dark"
              text="light"
              style={{
                width: "10rem",
                height: "13rem",
                marginBottom: "1rem",
                borderRadius: "20px",
                marginLeft:"20px"
              }}
            >
              <Card.Img
              style={{height:"50%"}}
                variant="top"
                className="card-dishimg"
                src={dish.photo}
              />
              <Card.Body>
                <Card.Title style={{fontSize:"14px", marginTop:"20px"}}>{dish.name}</Card.Title>
                {/* <Card.Text>{dish.ingredients}</Card.Text> */}

                {/* <Button variant="primary">Add</Button> */}
              </Card.Body>
            </Card>
          ))}
          {/* </Marquee> */}
        </div>
        <button onClick={viewFullMenu}
          style={{
           
          }}
          href="/menu"
        >
          View Full Menu
        </button>
      </div>
    </>
  );
};
export default Home;
// <Card style={{ width: '18rem' }}>
//     <Card.Img variant="bottom" src={cardImg}/>
//     <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body>
//   </Card>
