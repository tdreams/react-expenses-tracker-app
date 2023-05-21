import { Table } from "@mui/material";
import Dashboard from "./Dashboard";
import MainSideBar from "./MainSideBar";
import TableData from "./TableData";
import Forms from "./Forms";
import FormExpense from "./FormExpense";
import Total from "./Total";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const Main = () => {
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
  const [showFormExpense, setShowFormExpense] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [income, setIncome] = useState(0);
  const [listBudget, setListBudget] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      income,
    };

    if (income) {
      setListBudget([...listBudget, newItem]);
      setIncome(0);
      setShowForm(false);
    }
  };

  const handleSubmitexpense = (e) => {
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
      setShowFormExpense(false);
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
    sortOrder === "asc" ? (
      <MdOutlineArrowDropDown className="icon-arrow" />
    ) : (
      <MdOutlineArrowDropUp className="icon-arrow" />
    );
  const totalAmount = list.reduce(
    (sum, item) => sum + parseFloat(item.amount),
    0
  );

  return (
    <div className="main-container">
      <Dashboard
        list={list}
        listBudget={listBudget}
        totalAmount={totalAmount}
        selectedExpense={selectedExpense}
        setShowForm={setShowForm}
        showForm={showForm}
      />
      <div className="row ">
        <MainSideBar
          setShowFormExpense={setShowFormExpense}
          setShowForm={setShowForm}
          selectedExpense={selectedExpense}
          showForm={showForm}
        />
        <TableData
          sortList={sortList}
          sortIcon={sortIcon}
          totalAmount={totalAmount}
          list={list}
          listBudget={listBudget}
          deleteItem={deleteItem}
          setSelectedExpense={setSelectedExpense}
          setShowFormExpense={setShowFormExpense}
          showFormExpense={showFormExpense}
        />

        {showForm && (
          <Forms
            handleSubmit={handleSubmit}
            income={income}
            setIncome={setIncome}
            setShowForm={setShowForm}
          />
        )}
        {showFormExpense && (
          <FormExpense
            handleSubmitexpense={handleSubmitexpense}
            item={item}
            setItem={setItem}
            amount={amount}
            setAmount={setAmount}
            date={date}
            setDate={setDate}
            category={category}
            setCategory={setCategory}
            setShowFormExpense={setShowFormExpense}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
