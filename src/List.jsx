import React, { useEffect, useState } from "react";
import css from "./list.css";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core/";
import { useNavigate } from "react-router-dom";
function List(setId) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://opjzr88ro7.execute-api.ca-central-1.amazonaws.com/dev")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.body);
        console.log("fetched data", data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    // TODO: Add code to handle delete button click
  };

  return (
    <div>
      <Table className={`${css.table}`}>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.phoneNumber}</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setId(item._id);

                    // Somewhere in your code, e.g. inside a handler:
                    navigate("/edit");
                  }}
                  className={`${css.btn}`}
                >
                  Edit
                </Button>
                <Button className={`${css.btn}`}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default List;