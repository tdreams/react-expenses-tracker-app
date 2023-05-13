import React from "react";
import { IoAddCircle } from "react-icons/io5";

const Sidebar = ({ setShowForm, showForm }) => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a onClick={() => setShowForm(!showForm)} className="add-ex ">
            <IoAddCircle />
            Add Expense
          </a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
