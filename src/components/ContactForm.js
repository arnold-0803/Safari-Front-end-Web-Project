const ContactForm = () => {
  return (
    <div className="flex flex-wrap md:px-[60px] max-[767px]:px-[15px]">
      <div className="flex-1 border-[2px] border-[#01959a]">
      <h1>Send us your feedback</h1>
        <form className="flex flex-col">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea rows="4" placeholder="Feedback"></textarea>
          <button>Submit</button>
        </form>
      </div>
      <div className="flex-1 border-[2px] border-[#01959a]">
        <h2>
          Contact And Location
        </h2>
        <div>
          <p>
            <i className="fa-solid fa-phone" ></i> (+254)714387538
          </p>
          <p>
            <i className="fa-solid fa-location-dot" ></i> Tours Offices, X Drive road, Nairobi, KE
          </p>
          <p>
            <i className="fa-solid fa-envelope" ></i> tours@info.com
          </p>
        </div>
        <div>
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
 
export default ContactForm;