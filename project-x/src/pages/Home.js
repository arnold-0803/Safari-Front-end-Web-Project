import Footer from "../components/Foofer";
import Reuseable from "../components/MainFrame";
import Navbar from "../components/Navbar";
import Places from "../components/PopularPlaces";
import Trip from "../components/Trip";
import image from "../images/premium_photo.avif"

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Reuseable 
        cName="hero"
        heroImage={image}
        title="Monumental Tour Experience"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Places />
      <Trip />
      <Footer/>
    </div>
  );
}
 
export default Home;