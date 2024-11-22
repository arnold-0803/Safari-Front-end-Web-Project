import Footer from "../components/Foofer";
import Navbar from "../components/Navbar";
import image from "../images/image.png";
import { useEffect } from "react";
import MainFrame from "../components/MainFrame";
import { destinationsData } from "../data/data";
import Destinations from "../components/Destinations";

const Service = ({scrollToTop}) => {

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div className="service">
      <Navbar/>
      <MainFrame 
        cName="sub-hero"
        heroImage={image}
        title=" Our Service"
      />
      <Destinations destinationData={destinationsData}/>
      <Footer/>
    </div>
  );
}
 
export default Service;