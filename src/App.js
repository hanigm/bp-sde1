import css from "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./Form";
import List from "./List";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
function App() {
  const [value, setValue] = React.useState(0);
  const [id, setId] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Tabs className={css.app} value={value} onChange={handleChange}>
            <Tab label="List" component={Link} to="/" />
            <Tab label="New" component={Link} to="/new" />
          </Tabs>
        </AppBar>
        <Routes>
          <Route path="/" element={<List setId={setId} />} />
          <Route exact path="/new" element={<Form />} />
          <Route path="/edit" element={<Form id={id} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
