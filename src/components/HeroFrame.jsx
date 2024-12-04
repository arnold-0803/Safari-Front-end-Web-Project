import SubcribeForm from "./SubcribeForm";

const MainFrame = (props) => {
  return (
    <div className={`${props.cName} relative w-full pt-[100px]`}>
      <div className="relative">
        <img className="w-full h-full object-cover object-fill max-[767px]:h-[40vh]"
          src={props.heroImage} alt={props.title}
        />
        <div className="hero-text absolute top-0 w-full left-0 flex flex-col justify-center items-center">
          <h1 className="md:text-[4rem] font-[800] max-[767px]:text-[1.8rem] text-[#fff]">
            {props.title}
          </h1>
          <h4 className="md:text-[2.3rem] font-[600] text-[#01959a] p-[5px_0_8px_0]
            max-[767px]:text-[1.2rem]">
            {props.text}
          </h4>
          <p className="font-bold text-[#01959a] text-[1.3rem]">
            {props.subText}
          </p>
          <div className="relative w-[0] flex justify-center items-center"
            ref={props.containerRef}>
            <button className={props.btnClass}
              onClick={props.handleToggle}>
              {props.buttonText}
            </button>
            {props.buttonText && props.toggle && (
              <SubcribeForm/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default MainFrame;