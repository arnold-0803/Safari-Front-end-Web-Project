import Footer from "../components/Foofer";
import Navbar from "../components/Navbar";
import PopularPlaces from "../components/PopularPlaces";
import RecentTrips from "../components/RecentTrips";
import image from "../images/premium_photo.avif";
import { useEffect } from "react";
import { poularPlaceData, recentTripData } from "../data/data";
import MainFrame from "../components/MainFrame";

const Home = ({scrollToTop}) => {

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div className="home">
      <Navbar/>
      <MainFrame 
        cName="hero"
        heroImage={image}
        title="Monumental Tour Experience"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <PopularPlaces PopularPlaceData={poularPlaceData}/>
      <RecentTrips recentTripData={recentTripData}/>
      <Footer/>
    </div>
  );
}
 
export default Home;