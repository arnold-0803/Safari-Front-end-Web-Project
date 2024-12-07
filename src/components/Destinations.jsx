import DestinationCard from "./DestinationCard";

const Destinations = ({
    destinations, 
    heading, 
    only,
    visibleItems,
    handleLoadMore
  }) => {
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
        {destinations && destinations.slice(0, visibleItems).map((destination, idx) => (
          <li key={`${destination.id}-${idx}`}>
            <DestinationCard 
              tripData={destination}
              only={only}
            />
          </li>
        ))}
      </ul>
      {destinations && visibleItems < destinations.length && (
        <button className="bg-[#01959a] mb-[40px] text-[#fff] p-[8px_16px]
          font-semibold rounded-[5px] hover:bg-[#01959aaf]"
          onClick={handleLoadMore}
        >
          See more
        </button>
      )}
    </div>
  );
}
 
export default Destinations;