import Place from "./Place";

const PopularPlaces = ({PopularPlaceData}) => {
  
  const destiinations = PopularPlaceData.places;

  return (
    <div className="segment bg-[whitesmoke]">
      <h1 className="heading">
        Popular Places in Kenya
      </h1>
      <p className="subtitle">
        Tour gives you the opportunity to explore destinations of your dream
      </p>
      <ul>
        {destiinations && destiinations.map(destiination => (
          <li key={destiination.id}>
            <Place 
              data={destiination}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default PopularPlaces;