import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Foofer";
import Navbar from "../components/Navbar";
import image from "../images/photo.avif";
import HeroFrame from "../components/HeroFrame";

const Contact = () => {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, []);

  return (
    <div className="contact">
      <div>
        <Navbar/>
      </div>
      <div>
        <HeroFrame 
          cName="sub-hero"
          heroImage={image}
          title="Contact Us"
        />
      </div>
      <div>
        <ContactForm/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
 
export default Contact;