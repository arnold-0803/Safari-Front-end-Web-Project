import "./AboutContentStyles.css";

const AboutContent = () => {
  return (
    <div className="about-content min-[780px]:grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[1rem]">
      <div className="p-4">
        <h3 className="text-center pb-2 md:text-[1.5rem] max-[767px]:text-[1.3rem] font-light text-[#01959a]">
          Our History
        </h3>
        <p>Tour is owned and managed by Tour Corp.
        a leading brand in web designing services
        and e-commerce solutions. Tour Corp. iscounted for
        its expertise in web solutions and its top ranking 
        business portals. Our incredible expertise and rich 
        experience has raissed our spirit to reach ahead 
        from  our client's expectations. Commendable success 
        rate of other managed by Tour is a live paradigm of 
        work excellence.</p>
      </div>
      <div className="min-[1274px]:border-l-[3px] min-[1274px]:border-r-[3px] border-gray-300
        p-4">
        <h3 className="text-center pb-2 md:text-[1.5rem] max-[767px]:text-[1.3rem] font-light text-[#01959a]">
          Our Mission
        </h3>
        <p>Our mission is to touch the horizon where our
        capabilities may successfully meet with the requirements
        of our clients, that too with ultimate transparency and 
        cost-effectiveness.</p>
      </div>
      <div className="p-4">
        <h3 className="text-center pb-2 md:text-[1.5rem] max-[767px]:text-[1.3rem] font-light text-[#01959a]">
          Our vision
        </h3>
        <p>To show the seed of par-excellence services with
        customer centric approach and reap the trust of wildwide 
        clients.</p>
      </div>
    </div>
  );
}
 
export default AboutContent;