import React, { useState } from "react";
import OtpForm from "./OtpForm";
import "./SignInForm.css"; // Import your CSS file for styling
import cattleFeedVideo from "../../images/cattle-feed.mp4";

function SignInForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [showOtpForm, setShowOtpForm] = useState(false);

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    setPhoneNumber(inputPhoneNumber);

    // Validate phone number format
    setIsValidPhoneNumber(/^\d{10}$/.test(inputPhoneNumber));
  };

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the phone number to a backend to initiate OTP generation
    // For this example, we'll just show the OTP form
    setShowOtpForm(true);
  };

  return (
    <div className="sign-in-form-container">
    <video autoPlay loop muted className="background-video">
      <source src={cattleFeedVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <h2>Sign In</h2>
      {!showOtpForm ? (
        <form className="phone-number-form" onSubmit={handlePhoneNumberSubmit}>
          <label>Phone Number:</label>
          <input
            className={`phone-input ${!isValidPhoneNumber ? "invalid" : ""}`}
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          {!isValidPhoneNumber && (
            <p className="error-message">Please enter a valid 10-digit phone number.</p>
          )}
          <button className="send-otp-button" type="submit">
            Send OTP
          </button>
        </form>
      ) : (
        <OtpForm phoneNumber={phoneNumber} />
      )}
    </div>
  );
}

export default SignInForm;
