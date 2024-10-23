import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Board from "./Board";
import "../App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("priority");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setTickets(data.tickets || []);
      } catch (err) {
        console.error("Error fetching tickets:", err);
        setError("Failed to fetch tickets");
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="kanban-app">
      {error ? (
        <div className="error-message">
          {error}
        </div>
      ) : (
        <>
          <Navbar setGroupBy={setGroupBy} setSortBy={setSortBy} />
          <Board tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
        </>
      )}
    </div>
  );
};

export default App;
