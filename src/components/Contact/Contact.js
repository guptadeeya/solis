import React from "react";
import "./css/Contact.css";
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import Details from "../../containers/Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import WhatsAppIcon from "../Home/WhatsappIcon";

const ContactForm = () => {
  //   const [name, setName] = useState("");
  //   const [phoneNumber, setPhoneNumber] = useState("");
  //   const [message, setMessage] = useState("");
  //   const [phoneNumberError, setPhoneNumberError] = useState("");
  //   const [successMessage, setSuccessMessage] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     if (!isValidPhoneNumber(phoneNumber)) {
  //       setPhoneNumberError("Please enter a valid phone number.");
  //       return;
  //     }

  //     // Handle form submission logic here

  //     // Display success message and reset form
  //     setSuccessMessage("Form submitted successfully!");
  //     setName("");
  //     setPhoneNumber("");
  //     setMessage("");
  //     setPhoneNumberError("");
  //     setTimeout(() => {
  //       setSuccessMessage("");
  //     }, 3000); // Clear success message after 3 seconds
  //   };

  //   const isValidPhoneNumber = (number) => {
  //     // Basic phone number validation using a regular expression
  //     const phoneRegex = /^[0-9]{10}$/;
  //     return phoneRegex.test(number);
  //   };

  return (
    <>

      <Header />
      <Details />

      <section className="contact-us">
        <p className="adhik-jankari">अधिक जानकारी के लिए -</p>
        <p className="sampark-kre">संपर्क करें: </p>

        <div className="call">
          <FontAwesomeIcon className="call-icon" icon={faPhone} />
          {/* <button className="ph-number"> */}
            <a className="ph-number" href="https://wa.me/918168000584">8168000584</a>
          {/* </button> */}
        </div>
      </section>
      {/* <section className="contact-form">
        <h2 className="form-heading">संपर्क करें</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="अपका नाम"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          <input
            type="tel"
            placeholder="आपका फोन नंबर"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              setPhoneNumberError("");
            }}
            className={`input-field ${phoneNumberError ? "error-border" : ""}`}
          />
          {phoneNumberError && <p className="error">{phoneNumberError}</p>}
          <textarea
            placeholder="आपका संदेश"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input-field"
          ></textarea>
          {successMessage && <p className="success">{successMessage}</p>}
          <button type="submit" className="submit-button">
            मेसेज भेजें
          </button>
        </form>
      </section> */}
      <WhatsAppIcon />
      <Footer />
    </>
  );
};

export default ContactForm;
