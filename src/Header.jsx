import "./Header.css";
import React, { useState } from "react";
import UserForm from "./UserForm";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header({ title }) {
  const [showForm, setShowForm] = useState(false);

  const handleUserAccountClick = () => {
    setShowForm(true); // Show the UserForm when AccountCircleIcon is clicked
  };

  const closeForm = () => {
    setShowForm(false); // Close the UserForm
  };

  return (
    <div className="Header">
      <h2>{title}</h2>
      <div className="Icons">
        <IconButton size="large" sx={{ color: "black" }}>
          <SearchIcon />
        </IconButton>
        <IconButton size="large" sx={{ color: "black" }}>
          <NotificationsIcon />
        </IconButton>
        <IconButton
          size="large"
          sx={{ color: "black" }}
          onClick={handleUserAccountClick}
        >
          <AccountCircleIcon />
        </IconButton>
      </div>
      {/* Render UserForm conditionally */}
      {showForm && <UserForm closeForm={closeForm} />}
    </div>
  );
}
