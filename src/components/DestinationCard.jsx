import { Link } from "react-router-dom";
import { useFavourite } from "../context/favourite-context-provider";

const DestinationCard = ({tripData, only}) => {

  const {favouriteItems, addToFavourites, removeFromFavourites} = useFavourite();

  const isFavourite = tripData ? favouriteItems.some(item => item.id === tripData.id && 
    item.source === tripData.source) : false;

  const handleAddRemoveFavourite = (event) => {
    event.preventDefault();
    if(isFavourite){
      removeFromFavourites(tripData.id, tripData.source);
    }else{
      addToFavourites({...tripData, source: tripData.source});
    }
  }

  return (
    <div className="t-card text-start shadow-[0_5px_25px_2px_rgba(0,0,0,0.11)] 
      rounded-[7px] overflow-hidden relative">
      <div className="t-image max-[595px]:h-[180px] overflow-hidden">
        <img className="w-[100%] h-[100%] transition-[0.3s] ease-in-out hover:scale-[1.3]"
          src={tripData.image} alt=""
        />
        {only && 
          <i className={`fa-solid fa-heart absolute top-2 right-2 text-[1.3rem] cursor-pointer
            ${isFavourite ? "text-red-400" : ""}`}
            onClick={handleAddRemoveFavourite}
          ></i>
        }
      </div>
      <div className="px-4 pb-4">
        <h4 className="font-thin text-[#01959a] max-[767px]:text-[1.4rem] md:text-[1.6rem]">
          {tripData.heading}
        </h4>
        <p>
          {tripData.description.slice(0, 130)}...
          <Link className="font-extrabold text-[#01959a]"
            to={`/details/data1/${tripData.id}`}>
            Book this trip
          </Link>
        </p>
      </div>
    </div>
  );
}
 
export default DestinationCard;