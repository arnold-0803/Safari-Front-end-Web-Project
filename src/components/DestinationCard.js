import { Link } from "react-router-dom";

const DestinationCard = ({tripData}) => {
  return (
    <div className="t-card text-start shadow-[0_5px_25px_2px_rgba(0,0,0,0.11)] 
      rounded-[7px] overflow-hidden">
      <div className="t-image h-[250px] overflow-hidden">
        <img className="w-[100%] h-[100%] transition-[0.3s] ease-in-out hover:scale-[1.3]"
          src={tripData.image} alt=""
        />
      </div>
      <div className="px-4 pb-4">
        <h4 className="font-thin text-[#01959a] max-[767px]:text-[1.4rem] md:text-[1.6rem]">
          {tripData.heading}
        </h4>
        <p>
          {tripData.description.slice(0, 130)}...
          <Link className="font-medium text-[#01959a]"
            to={"/"}>
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
}
 
export default DestinationCard;