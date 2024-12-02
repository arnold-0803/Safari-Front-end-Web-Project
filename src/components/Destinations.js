import DestinationCard from "./DestinationCard";

const Destinations = ({destinations, heading, only}) => {
  return (
    <div className="segment">
      <h1 className="heading">
        {heading}
      </h1>
      <p className="subtitle">
        You can discover unique destinations
        using Google Maps.
      </p>
      <ul className="md:p-[3rem_60px] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] 
        gap-[1rem] gap-y-[2rem] max-[767px]:pb-[3rem]">
        {destinations && destinations.map(destination => (
          <li key={destination.id}>
            <DestinationCard 
              tripData={destination}
              only={only}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default Destinations;