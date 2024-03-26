import { Component } from "react";
import "./PopularPlacesStyles.css";


class PlacesData extends Component{
  render(){
    return(
      <div>
        <div className={this.props.className}>
          <div className="description-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}
            <br/><br/>
            {this.props.text1}
          </p>
          </div>
          <div className="image">
            <img src={this.props.image1} alt="" />
            <img src={this.props.image2} alt="" />
          </div>
        </div>
        <p className="extended-text">
          {this.props.text2}
          <br /><br />
          {this.props.text3}
        </p>
      </div>
    );
  }
}

export default PlacesData;