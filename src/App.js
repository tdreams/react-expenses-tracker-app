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

export default function App() {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const [list, setList] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      item,
      amount,
      date: today.toDateString(),
    };

    if (item && amount) {
      setList([...list, newItem]);
      setItem("");
      setAmount("");
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
  console.log(list);
  return (
    <>
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <label htmlFor="item">Item</label>
          <input
            id="item"
            type="text"
            value={item}
            placeholder="Add a new item..."
            onChange={(e) => setItem(e.target.value)}
          />

          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button className="add-btn">Add Item</button>
        </form>
      </div>
      <div className="table-container">
        <TableContainer
          component={Paper}
          sx={{ maxHeight: "300px", backgroundColor: "#2A263E" }}
        >
          <Table
            aria-label="simple table"
            sx={{
              borderTopLeftRadius: "40px",
              borderTopRightRadiusRadius: "40px",
            }}
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell
                  onClick={sortList}
                  sx={{ cursor: "pointer", backgroundColor: "#3B3953" }}
                >
                  Item
                  {sortIcon}
                </TableCell>
                <TableCell align="right" sx={{ backgroundColor: "#3B3953" }}>
                  Amount
                  <br />
                  {`Total $ ${totalAmount.toFixed()}`}
                </TableCell>
                <TableCell align="right" sx={{ backgroundColor: "#3B3953" }}>
                  Created at
                </TableCell>
                <TableCell align="right" sx={{ backgroundColor: "#3B3953" }}>
                  Id
                </TableCell>
                <TableCell align="right" sx={{ backgroundColor: "#3B3953" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {list.map((e) => (
                <TableRow key={e.id} sx={{ ":hover": { bgcolor: "#3B3953" } }}>
                  <TableCell>{e.item}</TableCell>
                  <TableCell align="right">
                    {Number(e.amount).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">{e.date}</TableCell>
                  <TableCell align="right">
                    {e.id.slice(0, 3).concat("...")}
                  </TableCell>
                  <TableCell align="right">
                    <button onClick={() => deleteItem(e.id)} className="btn">
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
