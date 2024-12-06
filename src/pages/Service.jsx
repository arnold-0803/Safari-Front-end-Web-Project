import Footer from "../components/Foofer";
import Navbar from "../components/Navbar";
import image from "../images/image.png";
import { useEffect } from "react";
import Destinations from "../components/Destinations";
import useFetch from "../components/useFetch";
import HeroFrame from "../components/HeroFrame";

const Service = ({scrollToTop}) => {

  const {data, loading, error} = useFetch("/db/db1.json");

  const destinations = data.places || [];

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  if (loading) 
    return <p className="text-[#01959a] mt-[20%] text-[2rem] font-thin">Loading...</p>;

  if (error) 
    return <p className="text-[#01959a] mt-[20%] text-[2rem] font-thin">Error: {error}</p>;

  return (
    <div className="service">
      <Navbar/>
      <div>
        <HeroFrame 
          cName="sub-hero"
          heroImage={image}
          title="Find A Destination"
        />
      </div>
      <div className="cards">
        <Destinations 
          heading="Destinations in Kenya"
          destinations={destinations}
        />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
 
export default Service;