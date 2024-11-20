import Footer from "../components/Foofer";
import Navbar from "../components/Navbar";
import RecentTrips from "../components/RecentTrips";
import image from "../images/image.png";
import image1 from "../images/6.avif";
import image2 from "../images/6.jpeg";
import image3 from "../images/7.jpeg";
import { useEffect } from "react";
import MainFrame from "../components/MainFrame";

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
      <RecentTrips
        image1={image1}
        image2={image2}
        image3={image3}

        heading1="Trip to Maasai Mara"
        heading2="Trip to Lake Nakuru"
        heading3="Trip to Lake Naivasha"

        description1="
        The Maasai Mara National Reserve, often 
        simply referred to as the Maasai Mara or 
        Mara, is one of Kenya's most iconic and renowned 
        wildlife conservation areas. It is situated in the 
        southwestern part of Kenya, the Maasai Mara National 
        Reserve shares a border with Tanzania's Serengeti 
        National Park. It is part of the larger Mara-Serengeti 
        ecosystem, which is renowned for its abundant wildlife 
        and annual wildebeest migration.
        "
        description2="
        Lake Nakuru National Park is situated approximately 
        160 kilometers northwest of Nairobi, Kenya's capital 
        city. It covers an area of about 188 square kilometers 
        , with Lake Nakuru being the centerpiece 
        of the park. This National Park is a protected area
        in the Rift Valley Province of Kenya, famous for its 
        stunning lake and diverse wildlife. 
        "
        description3="
        Lake Naivasha is situated approximately 90 kilometers 
        northwest of Nairobi, Kenya's capital city. It is one 
        of the largest freshwater lakes in the Great Rift Valley 
        and covers an area of about 139 square kilometers. Lake
        Naivash is known for its scenic beauty, abundant birdlife, 
        and diverse ecosystem. 
        "
      />
      <Footer/>
    </div>
  );
}
 
export default Service;