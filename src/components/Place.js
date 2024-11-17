import { Link } from "react-router-dom";
import "./PopularPlacesStyles.css";


function Place({data}){
    return(
      <div>
        <div className={data.customClass}>
          <div className="description-text">
            <h2 className="font-thin md:text-[2.5rem] max-[767px]:text-[1.5rem] text-[#01959a]">
              {data.heading}
            </h2>
            <p>{data.text}</p>
          </div>
          <div className="image">
            <img src={data.image1} alt="" />
            <img src={data.image2} alt="" />
          </div>
        </div>
        <div className="text-start">
          {data.exText}
        </div>
        <div className="py-[15px] flex items-start">
          <Link className="bg-[#01959a] p-[8px_14px] text-[#fff] rounded-[30px]
            hover:bg-[#01959ac4]"
            to={"/"}>
            Plan a trip
          </Link>
        </div>
      </div>
    );
}

export default Place;