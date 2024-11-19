import React, { useState } from "react";
import "./Teamcard.css";
import TeamForm from "./TeamForm";

export default function Teamcard() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="Teamcard">
      <div className="Card">
        <h4>Graphics</h4>
        <div style={{ textAlign: "left", margin: "20px" }}>
          <div style={{ margin: "10px" }}>No. of Members- XX</div>
          <div style={{ margin: "10px" }}>Team Lead Name- Mr. XYZ</div>
        </div>
      </div>

      <div className="Card">
        <h4>Content</h4>
        <div style={{ textAlign: "left", margin: "20px" }}>
          <div style={{ margin: "10px" }}>No. of Members- XX</div>
          <div style={{ margin: "10px" }}>Team Lead Name- Mr. XYZ</div>
        </div>
      </div>

      <div className="Card">
        <h4>Creative</h4>
        <div style={{ textAlign: "left", margin: "20px" }}>
          <div style={{ margin: "10px" }}>No. of Members- XX</div>
          <div style={{ margin: "10px" }}>Team Lead Name- Mr. XYZ</div>
        </div>
      </div>

      <div className="Card">
        <h4>Management</h4>
        <div style={{ textAlign: "left", margin: "20px" }}>
          <div style={{ margin: "10px" }}>No. of Members- XX</div>
          <div style={{ margin: "10px" }}>Team Lead Name- Mr. XYZ</div>
        </div>
      </div>

      <div className="Card">
        <h4>Marketing</h4>
        <div style={{ textAlign: "left", margin: "20px" }}>
          <div style={{ margin: "10px" }}>No. of Members- XX</div>
          <div style={{ margin: "10px" }}>Team Lead Name- Mr. XYZ</div>
        </div>
      </div>

      <div>
        <button
          onClick={handleOpenForm}
          style={{
            color: "#575757",
            width: "250px",
            height: "170px",
            border: "1px dashed #575757",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#b2b2b0",
          }}
        >
          +Add more teams
        </button>
      </div>

      {isFormOpen && <TeamForm onClose={handleCloseForm} />}
    </div>
  );
}
