import { Link } from "react-router-dom";

function Place({data}){
    return(
      <div>
        <div className={data.customClass}>
          <div className="description-text w-[45%] text-start text-[1rem] max-[850px]:w-full">
            <h2 className="font-thin md:text-[2.5rem] max-[767px]:text-[1.5rem] text-[#01959a]
              pb-[1rem]">
              {data.heading}
            </h2>
            <p>{data.description}</p>
          </div>
          <div className="image relative w-[50%] flex max-[850px]:w-[100%] m-[1.8rem_0]">
            <img className="w-[49%] h-[350px] object-cover rounded-[6px] shadow-[1px_1px_62px_-18px_rgba(0,0,0,0.19)]"
              src={data.image} alt="" 
            />
            <img className="w-[49%] h-[350px] object-cover rounded-[6px] shadow-[1px_1px_62px_-18px_rgba(0,0,0,0.19)]"
              src={data.image2} alt="" 
            />
          </div>
        </div>
        <div className="text-start">
          <p>{data.extraDesription}</p>
        </div>
        <div className="py-[15px] flex items-start">
          <Link className="bg-[#01959a] p-[8px_14px] text-[#fff] rounded-[30px]
            hover:bg-[#01959ac4]"
            to={`/details/data2/${data.id}`}>
            Plan a trip
          </Link>
        </div>
      </div>
    );
}

export default Place;