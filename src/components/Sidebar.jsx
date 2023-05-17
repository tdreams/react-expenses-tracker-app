// Sidebar.jsx
import React from "react";
import { IoAddCircle } from "react-icons/io5";

const Sidebar = ({ setShowForm, showForm }) => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a className="overview">Overview</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
