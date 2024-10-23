import React from "react";
import Column from "./Column";
import "./Board.css";

const Board = ({ tickets, groupBy }) => {
  const groupTickets = () => {
    const groups = {};

    if (groupBy === "status") {
      groups["To Do"] = tickets.filter(ticket => ticket.status === "To Do");
      groups["In Progress"] = tickets.filter(ticket => ticket.status === "In Progress");
      groups["Done"] = tickets.filter(ticket => ticket.status === "Done");
      groups["Cancelled"] = tickets.filter(ticket => ticket.status === "Cancelled");
    } else if (groupBy === "priority") {
      groups["No Priority"] = tickets.filter(ticket => ticket.priority === "no_priority");
      groups["Urgent"] = tickets.filter(ticket => ticket.priority === "urgent");
      groups["High"] = tickets.filter(ticket => ticket.priority === "high");
      groups["Medium"] = tickets.filter(ticket => ticket.priority === "medium");
      groups["Low"] = tickets.filter(ticket => ticket.priority === "low");
    } else if (groupBy === "user") { // Added grouping by user
      tickets.forEach(ticket => {
        const user = ticket.assignee; // Assuming ticket has an 'assignee' property
        if (!groups[user]) {
          groups[user] = [];
        }
        groups[user].push(ticket);
      });
    }

    return groups;
  };

  const groupedTickets = groupTickets();

  return (
    <div className="board">
      {Object.keys(groupedTickets).length > 0 ? (
        Object.keys(groupedTickets).map(group => (
          <Column key={group} title={group} tickets={groupedTickets[group]} />
        ))
      ) : (
        <div className="no-tickets-message">
          No tickets available
        </div>
      )}
    </div>
  );
};

export default Board;
