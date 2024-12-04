import { useEffect, useState } from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Foofer";
import Navbar from "../components/Navbar";
import image from "../images/tour.avif";
import MainFrame from "../components/HeroFrame";
import { faqDatat } from "../data/data";

const About = ({scrollToTop}) => {

  const [isOpen, setIsOpen] = useState(null);

  const handleOpenAndClose = (id) => {
    setIsOpen(isOpen === id ? null : id);
  }

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div className="about">
      <div>
        <Navbar/>
      </div>
      <div>
        <MainFrame 
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
        <h1 className="heading">
          Frequently Asked Question
        </h1>
        <div className="lg:p-[4rem_6rem] max-[1023px]:p-[1.5rem_15px_4px]">
          <ul className="list-decimal px-[20px]">
            {faqDatat.map(item => (
              <li className="pb-[10px] text-start marker:text-[#01959aaf] marker:font-medium md:text-[1.5rem]"
                key={item.id}>
                <h3 className="text-start md:text-[1.5rem] font-medium text-[#01959a] cursor-pointer inline"
                  onClick={() => handleOpenAndClose(item.id)}>
                  {item.question}
                  <i className={isOpen === item.id ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                </h3>
                {isOpen === item.id && 
                  <p className="text-start pb-4 px-[15px] text-[1rem] text-[#01959aaf] border-b-[2px] border-[#01959a]">
                  {item.answer}
                </p>
                }
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
 
export default About;