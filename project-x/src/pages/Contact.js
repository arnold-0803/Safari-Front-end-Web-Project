import ContactForm from "../components/ContactForm";
import Footer from "../components/Foofer";
import Reuseable from "../components/MainFrame";
import Navbar from "../components/Navbar";
import image from "../images/photo.avif";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar/>
      <Reuseable 
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