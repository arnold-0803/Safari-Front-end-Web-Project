import TripData from "./TripData";
import "./TripStyles.css";

const RecentTrips = (props) => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations
      using Google Maps.</p>
      <div className="trip-card">
        <TripData
          image={props.image1}
          heading={props.heading1}
          text={props.description1}
        />

        <TripData
          image={props.image2}
          heading={props.heading2}
          text={props.description2}
        />

        <TripData
          image={props.image3}
          heading={props.heading3}
          text={props.description3}
        />
      </div>
    </div>
  );
}
 
export default RecentTrips;