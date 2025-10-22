import resturantImage from"/images/resturant/exterior .jpg";
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
         <div>
          <img src={resturantImage} alt="resturant-image" className="w-full object-cover" style={{height:"90vh"}} />
          </div>

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

{/* Speical Dishes Section */}
  <div className="dish-section py-10 overflow-hidden">
  {/* Section Title */}
  <h1 className="relative text-center text-4xl md:text-5xl font-bold mb-14  tracking-wide drop-shadow-[0_2px_6px_rgba(255,215,0,0.3)]">
    Special Dishes
  </h1>

  {/* Dishes Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 px-6 md:px-28">
    {specialDish.map((dish, index) => (
      <div
        key={dish.id}
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
