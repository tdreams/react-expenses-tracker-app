import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MuiTable = ({ sortList, sortIcon, totalAmount, list, deleteItem }) => {
  const getRowStyle = (category) => {
    let backgroundColor;
    let color;

    switch (category) {
      case "Food":
        backgroundColor = "#f8d7da";
        break;
      case "Shopping":
        backgroundColor = "#d4edda";
        break;
      case "travel":
        backgroundColor = "black";
        break;
      case "other":
        backgroundColor = "#f5f5f5";
        break;
      default:
        backgroundColor = "#fff";
    }

    // Check luminance of background color and set text color
    const luminance = getLuminance(backgroundColor);
    if (luminance > 0.5) {
      color = "#000";
    } else {
      color = "#fff";
    }

    return {
      backgroundColor,
      color,
    };
  };

  // Helper function to calculate luminance of a color
  const getLuminance = (color) => {
    const rgb = color
      .substring(1)
      .match(/.{2}/g)
      .map((c) => parseInt(c, 16));
    const luminance =
      (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255;
    return luminance;
  };

  return (
    <div className="table-container">
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "600px",
          backgroundColor: "#2A263E",
          padding: "0px 0px",
        }}
      >
        <Table
          aria-label="simple table"
          sx={{ borderRadius: "20px" }}
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell
                onClick={sortList}
                sx={{
                  cursor: "pointer",
                  backgroundColor: "#3B3953",
                  fontSize: "1.2rem",
                }}
              >
                Item
                {sortIcon}
              </TableCell>
              <TableCell
                align="right"
                sx={{ backgroundColor: "#3B3953", fontSize: "1.2rem" }}
              >
                Amount
                <br />
                {`Total $ ${totalAmount.toFixed()}`}
              </TableCell>
              <TableCell
                align="right"
                sx={{ backgroundColor: "#3B3953", fontSize: "1.2rem" }}
              >
                Category
              </TableCell>
              <TableCell
                align="right"
                sx={{ backgroundColor: "#3B3953", fontSize: "1.2rem" }}
              >
                Date
              </TableCell>
              <TableCell
                align="right"
                sx={{ backgroundColor: "#3B3953", fontSize: "1.2rem" }}
              >
                Id
              </TableCell>
              <TableCell
                align="right"
                sx={{ backgroundColor: "#3B3953", fontSize: "1.2rem" }}
              ></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {list.length > 0 ? (
              list.map((e) => (
                <TableRow
                  key={e.id}
                  //style={getRowStyle(e.category)}
                  sx={{ ":hover": { bgcolor: "#3B3953" } }}
                >
                  <TableCell sx={{ fontSize: "1.1rem" }}>{e.item}</TableCell>
                  <TableCell align="right" sx={{ fontSize: "1.1rem" }}>
                    {Number(e.amount).toFixed(2)}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "1.1rem" }}>
                    {e.category}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "1.1rem" }}>
                    {e.date}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "1.1rem" }}>
                    {e.id.slice(0, 3).concat("...")}
                  </TableCell>
                  <TableCell align="right" className="btn-ic">
                    <MdDeleteOutline onClick={() => deleteItem(e.id)} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6}>
                  <h1 align="center">Welcome to Expense Tracker!</h1>
                  <p className="subtitle">Add, and delete expenses.</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MuiTable;
