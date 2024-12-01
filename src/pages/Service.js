import Footer from "../components/Foofer";
import Navbar from "../components/Navbar";
import image from "../images/image.png";
import { useEffect } from "react";
import MainFrame from "../components/MainFrame";
import Destinations from "../components/Destinations";
import useFetch from "../components/useFetch";

const Service = ({scrollToTop}) => {

  const {data, loading, error} = useFetch("/db/db.json");

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
      <MainFrame 
        cName="sub-hero"
        heroImage={image}
        title="Find A Destination"
      />
      <div>
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