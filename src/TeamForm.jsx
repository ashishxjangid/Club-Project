import React from "react";
import "./TeamForm.css";

export default function TeamForm({ onClose }) {
  return (
    <div className="form-overlay">
      <div className="form-container">
        <button
          onClick={onClose}
          className="close-button"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          ✖
        </button>
        <h3>Add New Team</h3>
        <div className="form-group">
          <label>Team Name</label>
          <input type="text" placeholder="Enter team name" />
        </div>
        <div className="form-group">
          <label>Number of Members</label>
          <input type="number" placeholder="Enter number of members" />
        </div>
        <div className="form-group">
          <label>Team Lead Name</label>
          <input type="text" placeholder="Enter team lead name" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea rows="3" placeholder="Enter a brief description"></textarea>
        </div>
        <div className="form-group">
          <label>Other Team Members</label>
          <textarea rows="2" placeholder="Enter names of other team members"></textarea>
        </div>
        <div className="button-group">
          <button className="form-button cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="form-button submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
}
