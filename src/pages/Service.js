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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="service">
      <Navbar/>
      <MainFrame 
        cName="sub-hero"
        heroImage={image}
        title=" Our Service"
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