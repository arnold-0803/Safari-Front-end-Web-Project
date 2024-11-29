import Footer from "../components/Foofer";
import Navbar from "../components/Navbar";
import PopularPlaces from "../components/PopularPlaces";
import image from "../images/premium_photo.avif";
import { useEffect, useRef, useState } from "react";
import MainFrame from "../components/MainFrame";
import Destinations from "../components/Destinations";
import AdventureActivities from "../components/AdventureActivities";
import SwiperScreen from "../components/SwiperScreen";
import useFetch from "../components/useFetch";

const Home = ({scrollToTop}) => {

  const [toggle, setToggle] = useState(false);
  const containerRef = useRef(null);
  const {data:data1} = useFetch("/db/db.json");
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

  const specificIndex = [5, 6, 7];
  const dataOne = data1.places ? specificIndex.map(idx => data1.places[idx]).filter(Boolean) : [];

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
        <PopularPlaces 
          destinations={data2.places}
        />
      </div>
      <div>
        <Destinations 
          heading="Recent Tours"
          destinations={dataOne}
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
          destinations={data1.places}
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