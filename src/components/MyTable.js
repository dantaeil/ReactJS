import * as React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEntry, deleteEntry } from "../actions/tableActions";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const BasicTable = (props) => {
  const [dessert, setDessert] = React.useState("");
  const [calory, setCalory] = React.useState("");
  const [fat, setFat] = React.useState("");
  const [carbs, setCarbs] = React.useState("");
  const [protein, setProtein] = React.useState("");

  const onAdd = () => {
    addEntry({ dessert, calory, fat, carbs, protein });
  };

  const onDelete = (dessert) => {
    deleteEntry(dessert);
  };

  return (
    <>
      <Button variant="contained" onClick={onAdd}>
        Add
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Action&nbsp;(g)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField
                  label="Dessert"
                  value={dessert}
                  onChange={(event) => {
                    setDessert(event.target.value);
                  }}
                ></TextField>
              </TableCell>
              <TableCell align="right">
                <TextField
                  label="Calories"
                  value={calory}
                  onChange={(event) => {
                    setCalory(event.target.value);
                  }}
                ></TextField>
              </TableCell>
              <TableCell align="right">
                <TextField
                  label="Fat"
                  value={fat}
                  onChange={(event) => {
                    setFat(event.target.value);
                  }}
                ></TextField>
              </TableCell>
              <TableCell align="right">
                <TextField
                  label="Carbs"
                  value={carbs}
                  onChange={(event) => {
                    setCarbs(event.target.value);
                  }}
                ></TextField>
              </TableCell>
              <TableCell align="right">
                <TextField
                  label="Protein"
                  value={protein}
                  onChange={(event) => {
                    setProtein(event.target.value);
                  }}
                ></TextField>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => {
                      onDelete(row.name);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

BasicTable.protoTypes = {
  rows: PropTypes.array.isRequired,
  addEntry: PropTypes.func.isRequired,
  deleteEntry: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  rows: state,
});

const mapDispatchToProps = {
  addEntry,
  deleteEntry,
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicTable);
