import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Foofer";
import Navbar from "../components/Navbar";
import image from "../images/photo.avif";
import MainFrame from "../components/MainFrame";

const Contact = ({scrollToTop}) => {

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div className="contact">
      <Navbar/>
      <MainFrame 
        cName="sub-hero"
        heroImage={image}
        title="Contact Us"
      />
      <ContactForm/>
      <Footer/>
    </div>
  );
}
 
export default Contact;