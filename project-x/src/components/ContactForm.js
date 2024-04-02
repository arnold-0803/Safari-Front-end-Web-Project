import "./ContactFormStyles.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1>Send us your feedback</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea rows="4" placeholder="Feedback"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
 
export default ContactForm;