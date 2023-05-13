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

export default function App() {
  const currentMonth = new Date().getMonth() + 1;
  const formatting = String(currentMonth).length <= 1 ? "0" : null;
  const formattedCurrentMonth = formatting + currentMonth;
  const currentYear = new Date().getFullYear();

  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const [list, setList] = useState([]);
  const [date, setDate] = useState(currentYear + "-" + formattedCurrentMonth);
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      item,
      amount,
      date,
      category,
    };

    if (item && amount && date && category) {
      setList([...list, newItem]);
      setItem("");
      setAmount(0);
      setDate("");
      setCategory("");
      setShowForm(false);
    }
  };

  const deleteItem = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  const sortList = () => {
    const sortedList = list.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.item.localeCompare(b.item);
      } else {
        return b.item.localeCompare(a.item);
      }
    });
    setList(sortedList);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  const sortIcon =
    sortOrder === "asc" ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />;
  const totalAmount = list.reduce(
    (sum, item) => sum + parseFloat(item.amount),
    0
  );
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  console.log(list);
  return (
    <>
      <Nav />
      <Sidebar setShowForm={setShowForm} showForm={showForm} />
      <MuiTable
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
      )}
    </>
  );
}
