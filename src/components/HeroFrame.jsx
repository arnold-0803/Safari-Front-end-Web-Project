import SubcribeForm from "./SubcribeForm";

const HeroFrame = (props) => {
  return (
    <div className={`${props.cName} relative w-full pt-[100px]`}>
      <div className="hero-content relative">
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
          <div className="relative flex justify-center items-center"
            ref={props.containerRef}>
            <p className="font-semibold text-[#01959a] text-[1.3rem] cursor-pointer"
              onClick={props.handleToggle}>
              {props.subText}
              <span className="text-gray-700 font-bold hover:underline ml-1">
                {props.buttonText}
              </span>
            </p>
            {props.buttonText && props.toggle && (
              <SubcribeForm/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default HeroFrame;