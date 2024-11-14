import "./PopularPlacesStyles.css";


function Place({data}){
    return(
      <div>
        <div className={data.customClass}>
          <div className="description-text">
            <h2>{data.heading}</h2>
            <p>{data.text}</p>
          </div>
          <div className="image">
            <img src={data.image1} alt="" />
            <img src={data.image2} alt="" />
          </div>
        </div>
        <div>
          {data.exText}
        </div>
      </div>
    );
}

export default Place;