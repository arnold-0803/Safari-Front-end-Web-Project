import Footer from "../components/Foofer";
import Navbar from "../components/Navbar";
import PopularPlaces from "../components/PopularPlaces";
import image from "../images/premium_photo.avif";
import { useEffect, useRef, useState } from "react";
import { poularPlaceData, recentTripData } from "../data/data";
import MainFrame from "../components/MainFrame";
import Destinations from "../components/Destinations";
import AdventureActivities from "../components/AdventureActivities";

const Home = ({scrollToTop}) => {

  const [toggle, setToggle] = useState(false);
  const containerRef = useRef(null);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const handleClickOutside = (event) => {
    if(containerRef.current && !containerRef.current.contains(event.target)){
      setToggle(false);
    }
  }

  useEffect(() => {
    if(toggle){
      document.addEventListener("mousedown", handleClickOutside);
    }else{
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div className="home">
      <div>
        <Navbar/>
      </div>
      <div>
        <MainFrame 
          cName="hero"
          heroImage={image}
          title="Monumental Tour Experience"
          text="Choose Your Favourite Destination"
          subText="Subscribe for latest news"
          buttonText="subscribe"
          btnClass="show"
          handleToggle={handleToggle}
          toggle={toggle}
          setToggle={setToggle}
          containerRef={containerRef}
        />
      </div>
      <div>
        <PopularPlaces PopularPlaceData={poularPlaceData}/>
      </div>
      <div>
        <Destinations destinationData={recentTripData}/>
      </div>
      <div>
        <AdventureActivities/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
 
export default Home;