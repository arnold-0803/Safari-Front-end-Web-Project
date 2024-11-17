import TripCard from "./TripCard";
import "./TripStyles.css";

const RecentTrips = (props) => {
  return (
    <div className="segment">
      <h1 className="heading">
        Recent Trips
      </h1>
      <p className="subtitle">
        You can discover unique destinations
        using Google Maps.
      </p>
      <div className="trip-card">
        <TripCard
          image={props.image1}
          heading={props.heading1}
          text={props.description1}
        />

        <TripCard
          image={props.image2}
          heading={props.heading2}
          text={props.description2}
        />

        <TripCard
          image={props.image3}
          heading={props.heading3}
          text={props.description3}
        />
      </div>
    </div>
  );
}
 
export default RecentTrips;