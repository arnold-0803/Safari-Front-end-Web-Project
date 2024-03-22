import AboutContent from "../components/AboutContent";
import Footer from "../components/Foofer";
import Reuseable from "../components/MainFrame";
import Navbar from "../components/Navbar";
import image from "../images/tour.avif";

const About = () => {
  return (
    <div className="about">
      <Navbar/>
      <Reuseable 
        cName="sub-hero"
        heroImage={image}
        title="About Us"
      />
      <AboutContent/>
      <Footer/>
    </div>
  );
}
 
export default About;