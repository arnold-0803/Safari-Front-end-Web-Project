const MainFrame = (props) => {
  return (
    <div className={`${props.cName} relative w-full h-[100vh]`}>
      <img className="w-full h-full object-cover"
        src={props.heroImage} alt={props.title}/>
      <div className="hero-text absolute top-[55%] w-full left-[50%] translate-x-[-50%]
        translate-y-[-50%]">
        <h1 className="md:text-[4rem] font-[800] max-[767px]:text-[1.5rem] text-[#fff]">
          {props.title}
        </h1>
        <h4 className="md:text-[2.3rem] font-[600] text-[#01959a] p-[0.5rem_0_2rem_0]
          max-[767px]:text-[1.2rem]">
          {props.text}
        </h4>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}
 
export default MainFrame;