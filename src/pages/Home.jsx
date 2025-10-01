import Carousel from "react-bootstrap/Carousel";
import home1image from "../assets/6886efa1f87e23af38fea5ecd1c6d33c.avif";
import home2image from "../assets/delicious-pizza-studio_23-2151846558.jpg";
import home3image from "../assets/pngtree-golden-burger-against-black-background-3d-rendering-and-illustration-image_3766152.jpg";
const Home = () => {
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
    </>
  );
};
export default Home;
