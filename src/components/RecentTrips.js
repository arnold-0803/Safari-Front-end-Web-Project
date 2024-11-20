import TripCard from "./TripCard";

const RecentTrips = ({recentTripData}) => {
  return (
    <div className="segment">
      <h1 className="heading">
        Recent Trips
      </h1>
      <p className="subtitle">
        You can discover unique destinations
        using Google Maps.
      </p>
      <ul className="trip-card p-[3rem_0] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[1rem]">
        {recentTripData.length > 0 && recentTripData.map(trip => (
          <li key={trip.id}>
            <TripCard tripData={trip}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default RecentTrips;