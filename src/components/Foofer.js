import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="top-left">
          <h1>Safari Tour</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div className="top-right">
          <span>
            <a href="/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
          </span>
          <span>
            <a href="/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
          </span>
          <span>
            <a href="/">
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
          </span>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">SafariTours</a>
          <a href="/">Project-x</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Lincense</a>
        </div>
      </div>
      <p className="copyright">© 2024 SafriTours powered by ArnoldKiritu Corp | All rightsss reserved</p>
    </div>
  );
}
 
export default Footer;