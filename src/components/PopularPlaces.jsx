import Place from "./Place";

const PopularPlaces = ({destinations}) => {
  return (
    <div className="segment bg-[whitesmoke]">
      <h1 className="heading">
        Popular Places in Kenya
      </h1>
      <p className="subtitle">
        Tour gives you the opportunity to explore destinations of your dream
      </p>
      <ul>
        {destinations && destinations.map(destination => (
          <li key={destination.id}>
            <Place 
              data={destination}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default PopularPlaces;