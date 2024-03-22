import Footer from "../components/Foofer";
import Reuseable from "../components/MainFrame";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import image from "../images/image.png";

const Service = () => {
  return (
    <div className="service">
      <Navbar/>
      <Reuseable 
        cName="sub-hero"
        heroImage={image}
        title=" Our Service"
      />
      <Trip/>
      <Footer/>
    </div>
  );
}
 
export default Service;