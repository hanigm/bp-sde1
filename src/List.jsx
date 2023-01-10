import React, { useEffect, useState } from "react";
import sendRequest from "./util";
// import { useToasts } from "react-toast-notifications";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core/";
//import ENV from "./config";

const List = ({handleChange}) => {
  const [reload, setReload] = useState(true);
  const [items, setItems] = useState([]);
 // url = ENV.API.endpoint;

  useEffect(() => {
    fetch("https://opjzr88ro7.execute-api.ca-central-1.amazonaws.com/dev", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data.body);
        console.log("fetched data", data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [reload]);


  const handleDelete = (item) => {
    sendRequest("DELETE", { id: item._id });
    setReload(!reload);
  };

  const handleEdit = (item) => {
    console.log("handleedit", item);
    handleChange({page:"new", item});
  };

  return (
    <div>
      <Table>
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
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default List;