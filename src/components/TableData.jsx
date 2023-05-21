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
import { IoAddCircle } from "react-icons/io5";

const TableData = ({
  sortList,
  sortIcon,
  list,
  listExpense,
  deleteItem,
  setSelectedExpense,
  setShowFormExpense,
}) => {
  const toggleForm = () => {
    setShowFormExpense((prevShowForm) => !prevShowForm);
  };
  return (
    <div className="tabledata">
      <div className="tabBar">
        <a onClick={toggleForm} className="add-btn-expense">
          <div>
            <IoAddCircle className="icon-add" />
          </div>
          <p>Add Expense</p>
        </a>
      </div>
      <div className="table-container">
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: "440px",
            backgroundColor: "#656D87",

            padding: "0px 0px 0px 0px",
          }}
        >
          <Table
            aria-label="simple table"
            sx={{ borderRadius: "20px" }}
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell onClick={sortList} sx={{ cursor: "pointer" }}>
                  <div className="row-cell">
                    <p>Item</p>
                    {sortIcon}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <p>Amount</p>
                </TableCell>
                <TableCell align="right">
                  <p>Category</p>
                </TableCell>
                <TableCell align="right">
                  <p>Date</p>
                </TableCell>
                <TableCell align="right">
                  <p>#Id</p>
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {list.length > 0 ? (
                list.map((e) => (
                  <TableRow
                    key={e.id}
                    onClick={() => setSelectedExpense(e)}
                    sx={{
                      ":hover": { bgcolor: "#2E3752" },
                      zIndex: 40,
                      cursor: "pointer",
                    }}
                  >
                    <TableCell>
                      <p>{e.item}</p>
                    </TableCell>
                    <TableCell align="right">
                      <p className="amount">$ {Number(e.amount).toFixed(2)}</p>
                    </TableCell>
                    <TableCell align="right">
                      <p>
                        {e.category.split(" ").map((word) => {
                          return word[0].toUpperCase() + word.slice(1) + " ";
                        })}
                      </p>
                    </TableCell>
                    <TableCell align="right">
                      <p>{e.date}</p>
                    </TableCell>
                    <TableCell align="right">
                      <p>{e.id.slice(0, 4).toUpperCase()}</p>
                    </TableCell>
                    <TableCell align="right" className="del-icn">
                      <MdDeleteOutline onClick={() => deleteItem(e.id)} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6}>
                    <h1 align="center">Nothing to display yet!</h1>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default TableData;
