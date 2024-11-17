import { Link } from "react-router-dom";

const TripCard = (props) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="" />
      </div>
      <div className="px-4 pb-4">
        <h4 className="font-thin text-[#01959a] max-[767px]:text-[1.6rem] md:text-[1.8rem]">
          {props.heading}
        </h4>
        <p>
          {props.text.slice(0, 150)}...
          <Link className="font-medium text-[#01959a]"
            to={"/"}>
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
}
 
export default TripCard;