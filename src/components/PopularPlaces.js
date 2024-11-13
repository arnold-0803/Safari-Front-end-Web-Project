import "./PopularPlacesStyles.css";
import Place from "./Place";

const PopularPlaces = ({dataOne}) => {
  return (
    <div className="places-wrapper">
      <h1>Popular Places in Kenya</h1>
      <p>Tour gives you the opportunity to explore destinations of your dream</p>
      <ul>
        {dataOne.length > 0 && dataOne.map(data => (
          <li key={data}>
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