import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
  app: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    display: "inline-block",
    width: "49%",
    color: "#fff",
    textAlign: "center",
  },
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3f51b5",
  },
});

function App() {
  const classes = useStyles();
  const [page, setPage] = useState("list");
  const [item, setItem] = useState();

  const handleChange = (data) => {
    setPage(data.page);
    setItem(data.item);
  };

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Button
          className={classes.btn}
          color={page === "list" ? "primary" : "secondary"}
          onClick={() => setPage("list")}
        >
          List
        </Button>
        <Button
          className={classes.btn}
          color={page === "new" ? "primary" : "secondary"}
          onClick={() => handleChange({page: "new", item: null}) }
        >
          New
        </Button>
      </AppBar>
      <div>
        {page === "list" && <List handleChange={handleChange} />}
        {page === "new" && <Form setPage={setPage} item={item} />}
      </div>
    </div>
  );
}

export default App;
