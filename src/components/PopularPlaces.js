import "./PopularPlacesStyles.css";
import Place from "./Place";

const PopularPlaces = ({PopularPlaceData}) => {
  return (
    <div className="places-wrapper">
      <h1 className="heading">
        Popular Places in Kenya
      </h1>
      <p className="subtitle">
        Tour gives you the opportunity to explore destinations of your dream
      </p>
      <ul className="xl:px-[60px] max-[1281px]:px-[10px]">
        {PopularPlaceData.length > 0 && PopularPlaceData.map(data => (
          <li key={data.id}>
            <Place 
              data={data}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default PopularPlaces;