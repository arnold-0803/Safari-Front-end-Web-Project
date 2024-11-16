import { useEffect } from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Foofer";
import Reuseable from "../components/MainFrame";
import Navbar from "../components/Navbar";
import image from "../images/tour.avif";

const About = ({scrollToTop}) => {

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div className="about">
      <div>
        <Navbar/>
      </div>
      <div>
        <Reuseable 
          cName="sub-hero"
          heroImage={image}
          title="About Us"
        />
      </div>
      <div>
        <h1 className="heading">
          Know About Us
        </h1>
        <AboutContent/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
 
export default About;