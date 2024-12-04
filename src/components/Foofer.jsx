const Footer = () => {
  return (
    <div className="bg-[#01959a] max-[850px]:p-[4rem_2rem_0] p-[4rem_6rem_0] text-[#fff]">
      <div className="flex text-start justify-between items-center flex-wrap">
        <div>
          <h1 className="text-[1.2rem] font-extrabold">
            Safari
          </h1>
          <p className="font-thin text-[1.2rem]">
            Choose your favourite destination.
          </p>
        </div>
        <div className="flex">
          <span className="text-[#fff] p-[0_10px]">
            <a className="block"
              href="/">
              <i className="fa-brands fa-facebook-square block text-[1.6rem] 
              bg-[#01959a] p-[12px] hover:shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></i>
            </a>
          </span>
          <span className="text-[#fff] p-[0_10px]">
            <a className="block"
              href="/">
              <i className="fa-brands fa-instagram-square block text-[1.6rem] 
              bg-[#01959a] p-[12px] hover:shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></i>
            </a>
          </span>
          <span className="text-[#fff] p-[0_10px]">
            <a className="block"
              href="/">
              <i className="fa-brands fa-square-x-twitter block text-[1.6rem] 
              bg-[#01959a] p-[12px] hover:shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></i>
            </a>
          </span>
        </div>
      </div>
      <div className="pt-[2rem] text-start flex flex-wrap justify-between">
        <div className="flex flex-col">
          <h4 className="text-[1.1rem] font-bold p-[1rem_0_0.4rem_0]">
            Community
          </h4>
          <a className="text-[#fafafa] pb-[0.15rem] text-[1rem]"
            href="/">GitHub</a>
          <a className="text-[#fafafa] pb-[0.15rem] text-[1rem]"
            href="/">SafariTours</a>
          <a className="text-[#fafafa] pb-[0.15rem] text-[1rem]"
            href="/">Project-x</a>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[1.1rem] font-bold p-[1rem_0_0.4rem_0]">
            Help
          </h4>
          <a className="text-[#fafafa] pb-[0.15rem] text-[1rem]"
            href="/">Support</a>
          <a className="text-[#fafafa] pb-[0.15rem] text-[1rem]"
            href="/">Contact Us</a>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[1.1rem] font-bold p-[1rem_0_0.4rem_0]">
            Others
          </h4>
          <a className="text-[#fafafa] pb-[0.15rem] text-[1rem]" 
            href="/">Terms of Service</a>
          <a className="text-[#fafafa] pb-[0.15rem] text-[1rem]" 
            href="/">Privacy Policy</a>
          <a className="text-[#fafafa] pb-[0.15rem] text-[1rem]" 
            href="/">Lincense</a>
        </div>
      </div>
      <p className="w-full mt-[30px] p-[20px_0] inline-block 
       border-t">
        © 2024 SafriTours powered by ArnoldKiritu Corp | All rightsss reserved
      </p>
    </div>
  );
}
 
export default Footer;