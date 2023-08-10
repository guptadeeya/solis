import React, { useState } from "react";
import "./css/Contact.css";
import Header from "../../containers/Header";
import Navbar from "../../containers/Navbar";
import Footer from "../../containers/Footer";
import Details from "../../containers/Details";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPhoneNumber(phoneNumber)) {
      setPhoneNumberError("Please enter a valid phone number.");
      return;
    }

    // Handle form submission logic here

    // Display success message and reset form
    setSuccessMessage("Form submitted successfully!");
    setName("");
    setPhoneNumber("");
    setMessage("");
    setPhoneNumberError("");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000); // Clear success message after 3 seconds
  };

  const isValidPhoneNumber = (number) => {
    // Basic phone number validation using a regular expression
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  return (
    <>
      <Navbar />
      <Header />
      <Details />

      <section className="contact-form">
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
      </section>
      <Footer />
    </>
  );
};

export default ContactForm;
