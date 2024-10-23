import React from "react";
import Card from "./Card";
import "./Column.css";
import addIcon from "../assets/add.svg";
import menuIcon from "../assets/3 dot menu.svg";
import doneIcon from "../assets/Done.svg";
import cancelledIcon from "../assets/Cancelled.svg";
import inProgressIcon from "../assets/in-progress.svg";
import todoIcon from "../assets/To-do.svg";

const Column = ({ title, tickets }) => {
  const getIcon = (title) => {
    switch (title) {
      case "Done":
        return doneIcon;
      case "Cancelled":
        return cancelledIcon;
      case "In Progress":
        return inProgressIcon;
      case "To Do":
        return todoIcon;
      default:
        return null;
    }
  };

  return (
    <div className="column">
      <div className="column-header">
        <h2 className="column-title">
          {getIcon(title) && <img src={getIcon(title)} alt={title} className="column-icon" />}
          {title}
        </h2>
        <div className="column-icons">
          <img src={addIcon} alt="Add" className="add-icon" />
          <img src={menuIcon} alt="Menu" className="menu-icon" />
        </div>
      </div>
      <div className="column-body">
        {tickets.length > 0 ? (
          tickets.map(ticket => (
            <Card
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              description={ticket.description}
              assigneeImage={ticket.assigneeImage}
              isUrgent={ticket.isUrgent}
            />
          ))
        ) : (
          <p className="no-tickets">No tickets available</p>
        )}
      </div>
    </div>
  );
};

export default Column;
