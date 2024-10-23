import React from "react";
import PropTypes from "prop-types";
import urgentPriorityIcon from "../assets/SVG - Urgent Priority colour.svg";
import "./Card.css";

const Card = ({ id, title, description, assigneeImage, isUrgent }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">#{id}</span>
        <div className="assignee">
          {assigneeImage ? (
            <img src={assigneeImage} alt="Assignee" className="assignee-img" />
          ) : (
            <div className="assignee-placeholder">No Image</div>
          )}
        </div>
      </div>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      <div className="card-footer">
        {isUrgent && (
          <img
            src={urgentPriorityIcon}
            alt="Urgent Priority"
            className="priority-icon"
            aria-label="Urgent Priority"
          />
        )}
        <div className="tag">
          <span className="dot"></span> Feature Request
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  assigneeImage: PropTypes.string,
  isUrgent: PropTypes.bool,
};

Card.defaultProps = {
  assigneeImage: "",
  isUrgent: false,
};

export default Card;
