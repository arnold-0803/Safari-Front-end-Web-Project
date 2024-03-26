import Footer from "../components/Foofer";
import Reuseable from "../components/MainFrame";
import Navbar from "../components/Navbar";
import PopularPlaces from "../components/PopularPlaces";
import RecentTrips from "../components/RecentTrips";
import image from "../images/premium_photo.avif";
import image1 from "../images/4.avif";
import image2 from "../images/5.avif";
import image3 from "../images/5.jpeg";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Reuseable 
        cName="hero"
        heroImage={image}
        title="Monumental Tour Experience"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <PopularPlaces />
      <RecentTrips
        image1={image1}
        image2={image2}
        image3={image3}

        heading1="Trip to Amboseli"
        heading2="Trip to Mombasa"
        heading3="Trip to Aberdare"

        description1="
        Amboseli National Park is situated 
        in the southern part of Kenya, near 
        the border with Tanzania. Is one of Kenya's most 
        iconic and picturesque protected areas, renowned 
        for its stunning scenery, abundant wildlife, and 
        breathtaking views of Mount Kilimanjaro, Africa's 
        highest peak. Here's a brief description of Amboseli 
        National Park.
        "
        description2="
        Mombasa, a coastal city in Kenya, is renowned 
        for its pristine beaches, turquoise waters, and 
        vibrant coastal culture. Mombasa's beaches stretch 
        along the shores of the Indian Ocean on the Kenyan coast. 
        They are easily accessible from the city center and are a 
        popular destination for both locals and tourists.
        "
        description3="
        Aberdare National Park, located in central Kenya, is 
        a stunning and diverse protected area that encompasses a 
        range of habitats, from dense forests to open moorland. 
        Aberdare National Park is situated in the Aberdare 
        Mountain Range, approximately 100 kilometers north 
        of Nairobi, Kenya's capital city. It covers an area of about 
        767 square kilometers and is part of the 
        larger Aberdare Conservation Area.
        "
      />
      <Footer/>
    </div>
  );
}
 
export default Home;