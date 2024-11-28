import Footer from "../components/Foofer";
import Navbar from "../components/Navbar";
import PopularPlaces from "../components/PopularPlaces";
import image from "../images/premium_photo.avif";
import { useEffect, useRef, useState } from "react";
import { recentTripData } from "../data/data";
import MainFrame from "../components/MainFrame";
import Destinations from "../components/Destinations";
import AdventureActivities from "../components/AdventureActivities";
import SwiperScreen from "../components/SwiperScreen";
import useFetch from "../components/useFetch";

const Home = ({scrollToTop}) => {

  const [toggle, setToggle] = useState(false);
  const containerRef = useRef(null);
  const {data} = useFetch("/db/db.json");
  const {data:data2} = useFetch("/db/db2.json");

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

  const breakpoints = {
    0:{slidesPerView: 1},
    640:{slidesPerView:2},
    768:{slidesPerView:3},
    1024:{slidesPerView:4}
  };

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
        <PopularPlaces PopularPlaceData={data2}/>
      </div>
      <div>
        <Destinations 
          heading="Recent Tours"
          destinations={recentTripData}
        />
      </div>
      <div>
        <AdventureActivities/>
      </div>
      <div className="trending-destiination">
        <h1 className="heading">
          Top Trending Destinations
        </h1>
        <SwiperScreen
          customClassName="trending-swiper" 
          data={data}
          slidesPerView={3}
          navigation={true}
          breakpoints={breakpoints}
        />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
 
export default Home;