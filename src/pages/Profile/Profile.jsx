import React, { useState } from "react";
import "./Profile.scss";

const Profile = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const handleSendOtp = () => {
    if (phone.length >= 9) {
      setOtpSent(true);
      alert("OTP code sent to " + phone);
    } else {
      alert("Please enter a valid phone number");
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerifyOtp = () => {
    if (otp.every((digit) => digit !== "")) {
      alert("OTP Verified: " + otp.join(""));
    } else {
      alert("Please enter complete OTP");
    }
  };

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>

      {!otpSent && (
        <div className="form-group">
          <label>Enter your phone number:</label>
          <input
            type="text"
            placeholder="+998 xx xxx xx xx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleSendOtp}>Send OTP</button>
        </div>
      )}

      {otpSent && (
        <div className="otp-section">
          <h3>Enter OTP</h3>
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))}
          </div>
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
