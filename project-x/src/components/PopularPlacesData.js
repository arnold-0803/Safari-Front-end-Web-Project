import { Component } from "react";
import "./PopularPlacesStyles.css";


class PlacesData extends Component{
  render(){
    return(
      <div className={this.props.className}>
        <div className="description-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img src={this.props.image1} alt="" />
          <img src={this.props.image2} alt="" />
        </div>
      </div>
    );
  }
}

export default PlacesData;