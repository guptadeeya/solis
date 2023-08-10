import React, { useState } from 'react';

function OtpForm({ phoneNumber }) {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the OTP along with the phone number to validate
    // For this example, we'll just show a success message
    alert('OTP validated successfully!');
  };

  return (
    <form onSubmit={handleOtpSubmit}>
      <p>Enter the OTP sent to {phoneNumber}</p>
      <input
        type="text"
        value={otp}
        onChange={handleOtpChange}
      />
      <button type="submit">Verify OTP</button>
    </form>
  );
}

export default OtpForm;
