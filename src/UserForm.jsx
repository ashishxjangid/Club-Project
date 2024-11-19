import React, { useState } from "react";
import "./UserForm.css";
import CloseIcon from "@mui/icons-material/Close"; // MUI Close Icon
import GoogleIcon from "@mui/icons-material/Google"; // MUI Google Icon
import IconButton from "@mui/material/IconButton";

export default function UserForm({ closeForm }) {
  const [formType, setFormType] = useState("signin");

  return (
    <div className="form-overlay">
      <div className="form-container">
        {/* Close Button */}
        <IconButton
          className="close-button"
          onClick={closeForm}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "#333",
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Form Heading */}
        <h2>{formType === "signin" ? "Sign In" : "Sign Up"}</h2>

        {/* Form */}
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="form-button">
            {formType === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/* Google Sign-In Button */}
        <div className="google-auth">
          <button className="google-button">
            <GoogleIcon sx={{ marginRight: "8px" }} />
            {formType === "signin" ? "Sign In with Google" : "Sign Up with Google"}
          </button>
        </div>

        {/* Toggle Between Sign-In and Sign-Up */}
        <div className="toggle-container">
          <p>
            {formType === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <span
              onClick={() => setFormType(formType === "signin" ? "signup" : "signin")}
            >
              {formType === "signin" ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
