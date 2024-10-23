import React from "react";
import "./DisplayControls.css";

const DisplayControls = ({ setGroupBy, setSortBy }) => {
  return (
    <div className="display-controls">
      <div className="dropdown">
        <label>Grouping and Ordering</label>
        <select onChange={(e) => {
          const value = e.target.value;
          if (value === "user" || value === "priority" || value === "status") {
            setGroupBy(value);
          } else {
            setSortBy(value);
          }
        }}>
          <option value="status">Group by Status</option>
          <option value="user">Group by User</option>
          <option value="priority">Group by Priority</option>
          <option value="prioritySort">Sort by Priority</option>
          <option value="titleSort">Sort by Title</option>
          <option value="userSort">Sort by User</option>
        </select>
      </div>
    </div>
  );
};

export default DisplayControls;
