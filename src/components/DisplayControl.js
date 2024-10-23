import React from "react";
import "./DisplayControls.css";

const DisplayControls = ({ setGroupBy, setSortBy }) => {
  return (
    <div className="display-controls">
      <div className="dropdown">
        <label>Grouping</label>
        <select onChange={(e) => setGroupBy(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="dropdown">
        <label>Ordering</label>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default DisplayControls;
