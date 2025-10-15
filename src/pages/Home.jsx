import { Carousel, Button, Card, NavLink } from "react-bootstrap";
import home1image from "/images/resturant/exterior .jpg";
import home2image from "/images/Paneer-Pizza.jpg";
import home3image from "/images/macalooo.jpg";
import aboutImg from "/images/resturant/resturantImg.png";
import specialDish from "../specialDishes.json";
import { useNavigate } from "react-router";
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
    <Carousel fade interval={1500} indicators={true} controls={true}>
  {/* Slide 1 - Restaurant Front */}
  <Carousel.Item>
    <img className="d-block w-100 carousel-img" src={home1image} alt="Restaurant Front" />
    <Carousel.Caption >
      <h3 className="text-3xl font-bold text-white">Welcome to Apna Restaurant</h3>
      <p className="text-gray-200 text-lg">
        Step inside and enjoy a warm ambiance, delicious aromas, and unforgettable dining moments.
      </p>
    </Carousel.Caption>
  </Carousel.Item>

  {/* Slide 2 - Pizza */}
  <Carousel.Item>
    <img className="d-block w-100 carousel-img" src={home2image} alt="Pizza" />
   <Carousel.Caption className="bg-blend-saturation p-4 rounded-lg ">
      <h3 className="text-3xl font-bold text-white">Freshly Baked Pizza</h3>
      <p className="text-gray-200 text-lg">
        Experience the perfect blend of crispy crust, melted cheese, and rich flavors straight from our kitchen.
      </p>
    </Carousel.Caption>
  </Carousel.Item>

  {/* Slide 3 - Burger */}
  <Carousel.Item>
    <img className="d-block w-100 carousel-img" src={home3image} alt="McAloo Burger" />
    <Carousel.Caption >
      <h3 className="text-3xl font-bold text-white">Signature McAloo Burger</h3>
      <p className="text-gray-200 text-lg">
        A crispy aloo patty layered with tangy sauces and fresh veggies — the true taste of India in every bite!
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      {/* About us Section */}
    <div className="about-section flex flex-col md:flex-row justify-between items-center p-6 gap-6">
  {/* Text Section */}
  <div className="about-text md:w-1/2 w-full text-center md:text-left">
    <h1 className="text-3xl font-bold mb-4">About Us</h1>
    <p className=" leading-relaxed mb-4">
      Welcome to Apna Restaurant, where taste meets tradition. We serve
      freshly prepared dishes made with quality ingredients, bringing you
      the perfect mix of flavors and comfort. With a cozy ambience and
      dedicated chefs, we make every meal a memorable experience.
    </p>
    <button
      onClick={goToAbout}
      className="mt-2 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition"
    >
      Read More...
    </button>
  </div>

  {/* Image Section */}
  <div className="about-img md:w-1/2 w-full flex justify-center">
    <img
      src={aboutImg}
      alt="restaurant-img"
      className="rounded-2xl w-80 md:w-[90%] object-cover"
    />
  </div>
</div>

  <div className="dish-section py-10 overflow-hidden">
  {/* Section Title */}
  <h1 className="relative text-center text-4xl md:text-5xl font-bold mb-14  tracking-wide drop-shadow-[0_2px_6px_rgba(255,215,0,0.3)]">
    Special Dishes
  </h1>

  {/* Dishes Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 px-6 md:px-28">
    {specialDish.map((dish, index) => (
      <div
        key={index}
        className="rounded-2xl  overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition-all duration-300 transform hover:-translate-y-2"
      >
        {/* Dish Image */}
        <div className="overflow-hidden">
          <img
            src={dish.photo}
            alt={dish.name}
            className="h-48 md:h-48 w-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Dish Info */}
        <div className="p-2 my-4 text-center">
          <h4 className="text-sm ">
            {dish.name}
          </h4>
          <p className="p-4">{dish.ingredients}</p>
        </div>
      </div>
    ))}
  </div>

  {/* View Menu Button */}
  <div className="relative flex justify-center mt-12">
    <button
      onClick={viewFullMenu}
      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-yellow-500/40 transition-all duration-300 hover:scale-105"
    >
      View Full Menu
    </button>
  </div>
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
