import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import css from "./form.css";
import { useEffect, useState } from "react";

const Form = (id) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState();

  const handleChange = (event) => {
    if (event.target.name === "firstName") {
      setFirstName(event.target.value);
    } else if (event.target.name === "lastName") {
      setLastName(event.target.value);
    } else if (event.target.name === "phoneNumber") {
      setPhoneNumber(event.target.value);
    }
  };
  useEffect(() => {
    if (id)
      fetch("https://opjzr88ro7.execute-api.ca-central-1.amazonaws.com/dev")
        .then((response) => response.json())
        .then((data) => {
          console.log("fetched data", data);
        })
        .catch((error) => {
          console.error(error);
        });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://opjzr88ro7.execute-api.ca-central-1.amazonaws.com/dev", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, phoneNumber }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setFirstName("");
        setLastName("");
        setPhoneNumber();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form className={`${css.form} ${css.form__margin}`} onSubmit={handleSubmit}>
      <TextField
        name="firstName"
        label="First Name"
        value={firstName}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="lastName"
        label="Last Name"
        value={lastName}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="phoneNumber"
        label="Phone Number"
        value={phoneNumber}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
export default Form;
