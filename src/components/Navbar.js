import React, { useState } from "react";
import "./Navbar.css";
import displayIcon from "../assets/Display.svg";

const Navbar = ({ setGroupBy, setSortBy }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleGroupChange = (group) => {
    setGroupBy(group);
    setIsDropdownOpen(false);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="dropdown-container">
        <button className="dropdown-button" onClick={handleDropdown}>
          <img src={displayIcon} alt="Display options" className="dropdown-icon" />
          <span className="dropdown-text">Display</span>
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-row">
              <label className="dropdown-label">Grouping</label>
              <div className="dropdown-buttons">
                <button onClick={() => handleGroupChange("status")}>Status</button>
                <button onClick={() => handleGroupChange("priority")}>Priority</button>
              </div>
            </div>
            <div className="dropdown-row">
              <label className="dropdown-label">Sorting</label>
              <div className="dropdown-buttons">
                <button onClick={() => handleSortChange("title")}>Title</button>
                <button onClick={() => handleSortChange("priority")}>Priority</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
