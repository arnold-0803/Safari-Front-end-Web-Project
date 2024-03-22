import "./PopularPlacesStyles.css";
import image1 from "../images/1.avif";
import image2 from "../images/2.avif";
import image3 from "../images/3.avif";
import image4 from "../images/4.avif";
import PlacesData from "./PopularPlacesData";

const Places = () => {
  return (
    <div className="places">
      <h1>Popular Places</h1>
      <p>Tour gives you the opportunity to explore destinations of your dream</p>
      <PlacesData 
      className="destination-one"
        heading="Mount Kenya"

        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Dicta, veritatis molestias, fuga accusamus quo beatae reiciendis 
        perspiciatis molestiae enim distinctio magni illum. Porro, animi eligendi! 
        Velit libero explicabo sed voluptatum.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Dicta, veritatis molestias, fuga accusamus quo beatae reiciendis 
        perspiciatis molestiae enim distinctio magni illum. Porro, animi eligendi! 
        Velit libero explicabo sed voluptatum."

        image1={image1}
        image2={image2}
      />

      <PlacesData 
      className="destination-one-reverse"
        heading="Mt. Duguldul, Batangas"

        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Dicta, veritatis molestias, fuga accusamus quo beatae reiciendis 
        perspiciatis molestiae enim distinctio magni illum. Porro, animi eligendi! 
        Velit libero explicabo sed voluptatum.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Dicta, veritatis molestias, fuga accusamus quo beatae reiciendis 
        perspiciatis molestiae enim distinctio magni illum. Porro, animi eligendi! 
        Velit libero explicabo sed voluptatum."
        
        image1={image3}
        image2={image4}
      />
    </div>
  );
}
 
export default Places;