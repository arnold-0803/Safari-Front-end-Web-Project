const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1 className="heading">
        Reach Us Through
      </h1>
      <div className="flex max-[740px]:flex-col lg:px-[60px] max-[1023px]:px-[15px]
        gap-[1rem] pb-[50px] pt-[15px]">
        <div className="flex-1 border-[2px] border-[#01959a] rounded-[10px]">
          <h2 className="font-thin md:text-[1.8rem] max-[767px]:text-[1.2rem] text-[#01959a]
            py-[10px]">
            Send us your feedback
          </h2>
          <form className="flex flex-col p-[0_30px_15px] gap-[10px]">
            <input className="h-[50px] bg-gray-200 px-[15px] outline-[#01959a]" 
              type="text" placeholder="Name" required
            />
            <input className="h-[50px] bg-gray-200 px-[15px] outline-[#01959a]" 
              type="text" placeholder="Email" required
            />
            <input className="h-[50px] bg-gray-200 px-[15px] outline-[#01959a]" 
              type="text" placeholder="Subject" required
            />
            <textarea className="w-full h-[150px] bg-gray-200 p-[15px] outline-[#01959a]" 
              placeholder="Write feedback" required>
            </textarea>
            <button className="h-[50px] mt-[40px] rounded-[30px] font-semibold text-[1.1rem]
              border-[2px] border-[#01959a] relative overflow-hidden">
              Submit
            </button>
          </form>
        </div>
        <div className="flex-1 border-[2px] border-[#01959a] rounded-[10px]">
          <h2 className="font-thin md:text-[1.8rem] max-[767px]:text-[1.2rem] text-[#01959a]
            py-[10px]">
            Contact And Location
          </h2>
          <div className="px-[30px] flex flex-col gap-[10px]">
            <p className="text-start">
              <i className="fa-solid fa-phone text-[#01959a] text-[1.5rem]" ></i> (+254)714387538
            </p>
            <p className="text-start">
              <i className="fa-solid fa-location-dot text-[#01959a] text-[1.5rem]" ></i> Tours Offices, X Drive road, Nairobi, KE
            </p>
            <p className="text-start">
              <i className="fa-solid fa-envelope text-[#01959a] text-[1.5rem]" ></i> tours@info.com
            </p>
          </div>
          <div>
            <h2 className="font-thin md:text-[1.8rem] max-[767px]:text-[1.2rem] text-[#01959a]
            py-[6px]">
              Follow Us
            </h2>
            <div className="flex justify-center items-center gap-[15px]">
              <a className="text-[1.5rem] dlock bg-[#01959a] text-[#fff] h-[30px] w-[30px]
                flex justify-center items-center rounded-[8px] rotate-[45deg] hover:rotate-[-45%]
                hover:bg-[#fff] hover:text-[#01959a]"
                href="https://facebook.com">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a className="text-[1.5rem] dlock bg-[#01959a] text-[#fff] h-[30px] w-[30px]
                flex justify-center items-center rounded-[8px] rotate-[45deg] hover:rotate-[-45%]
                hover:bg-[#fff] hover:text-[#01959a]"
                href="https://instagram.com">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="text-[1.5rem] dlock bg-[#01959a] text-[#fff] h-[30px] w-[30px]
                flex justify-center items-center rounded-[8px] rotate-[45deg] hover:rotate-[-45%]
                hover:bg-[#fff] hover:text-[#01959a]"
                href="https://twitter.com">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
          <div className="p-[15px_10px]">
            <iframe className="w-full h-[250px] border-[2px] border-[#01959a] rounded-[4px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3586908131!2d36.6825783570878!3d-1.3028602772359434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1732200560297!5m2!1sen!2ske" 
              width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="location-map">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ContactForm;