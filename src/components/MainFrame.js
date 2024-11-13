import "./MainFrameStyles.css";

const Reuseable = (props) => {
  return (
    <div className={props.cName}>
      <img alt="image" src={props.heroImage} />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}
 
export default Reuseable;