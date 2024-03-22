import TripData from "./TripData";
import "./TripStyles.css";
import image1 from "../images/5.jpg";
import image2 from "../images/8.jpg";
import image3 from "../images/6.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations
      using Google Maps.</p>
      <div className="trip-card">
        <TripData
          image={image1}

          heading="Trip to Indonesia"

          text="Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Nam 
          fugit, pariatur impedit quos dolorem 
          ducimus debitis eaque. Esse consectetur 
          amet, ipsam itaque modi, quia, numquam dolor 
          quidem earum ipsa molestiae!"
        />

<TripData
          image={image2}
          
          heading="Trip to Malaysia"

          text="Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Nam 
          fugit, pariatur impedit quos dolorem 
          ducimus debitis eaque. Esse consectetur 
          amet, ipsam itaque modi, quia, numquam dolor 
          quidem earum ipsa molestiae!"
        />

<TripData
          image={image3}
          
          heading="Trip to France"

          text="Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Nam 
          fugit, pariatur impedit quos dolorem 
          ducimus debitis eaque. Esse consectetur 
          amet, ipsam itaque modi, quia, numquam dolor 
          quidem earum ipsa molestiae!"
        />
      </div>
    </div>
  );
}
 
export default Trip;