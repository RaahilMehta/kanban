import React from "react";

const GroupControls = ({ setGroupBy, setSortBy }) => {
  return (
    <div>
      <h3>Group by:</h3>
      <button onClick={() => setGroupBy("status")}>Status</button>
      <button onClick={() => setGroupBy("user")}>User</button>
      <button onClick={() => setGroupBy("priority")}>Priority</button>
      
      <h3>Sort by:</h3>
      <button onClick={() => setSortBy("priority")}>Priority</button>
      <button onClick={() => setSortBy("title")}>Title</button>
    </div>
  );
};

export default GroupControls;
