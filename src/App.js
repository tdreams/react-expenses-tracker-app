import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  colors,
} from "@mui/material";
import Forms from "./components/Forms";
import MuiTable from "./components/MuiTable";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <Nav />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
      {/* <MuiTable
        sortList={sortList}
        sortIcon={sortIcon}
        totalAmount={totalAmount}
        list={list}
        deleteItem={deleteItem}
      />
      {showForm && (
        <Forms
          handleSubmit={handleSubmit}
          item={item}
          setItem={setItem}
          amount={amount}
          setAmount={setAmount}
          date={date}
          setDate={setDate}
          category={category}
          setCategory={setCategory}
        />
      )} */}
    </>
  );
}
