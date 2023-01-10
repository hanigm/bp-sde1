import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import sendRequest from "./util";
// import { useToasts } from "react-toast-notifications";
//import ENV from "./config";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 500,
    margin: "0 auto",
    padding: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    boxShadow:
      "0 4px 8px 0 rgba(59, 15, 103, 1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  btn:{
    marginTop: "16px"
  }
});

const Form = ({item, setPage}) => {
  const classes = useStyles()
  const [firstName, setFirstName] = React.useState(item?.firstName);
  const [lastName, setLastName] = React.useState(item?.lastName);
  const [phoneNumber, setPhoneNumber] = React.useState(item?.phoneNumber);
  // const { addToast } = useToasts();
 // url = ENV.API.endpoint;

  const handleInputChange = (event) => {
    if (event.target.name === "firstName") {
      setFirstName(event.target.value);
    } else if (event.target.name === "lastName") {
      setLastName(event.target.value);
    } else if (event.target.name === "phoneNumber") {
      setPhoneNumber(event.target.value);
    }
  };
  useEffect(() => {
    if (item){
      setPhoneNumber(item.phoneNumber);
      setFirstName(item.firstName);
      setLastName(item.lastName);
      console.log("from usef", item);
    }else{
      setPhoneNumber("");
      setFirstName("");
      setLastName("");
    }
  }, [item]);
 
  const handleSubmit = (event) => {
    // if (!firstName || !lastName || !(typeof phoneNumber == "number")) {
    //   addToast("Bad form input", {
    //     appearance: "error",
    //     autoDismiss: true,
    //   });
    // }
    event.preventDefault();
    if (item) {
      sendRequest("PUT", { id: item._id, firstName, lastName, phoneNumber });
      // fetch("https://opjzr88ro7.execute-api.ca-central-1.amazonaws.com/dev", {
      //   method: "PUT",
      //   mode: "cors",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     id: item._id,
      //     firstName,
      //     lastName,
      //     phoneNumber,
      //   }),
      // })
      //   .then((response) => response.json())
      //   .then((result) => {
      //     console.log(result);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    } else {
      sendRequest("POST", { firstName, lastName, phoneNumber });
      // fetch("https://opjzr88ro7.execute-api.ca-central-1.amazonaws.com/dev", {
      //   method: "POST",
      //   mode: "cors",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ firstName, lastName, phoneNumber }),
      // })
      //   .then((response) => response.json())
      //   .then((result) => {
      //     console.log(result);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    }
    setPage("list");
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        name="firstName"
        label="First Name"
        value={firstName}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        name="lastName"
        label="Last Name"
        value={lastName}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        name="phoneNumber"
        label="Phone Number"
        value={phoneNumber}
        onChange={handleInputChange}
        fullWidth
      />
      <Button
        className={classes.btn}
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
};
export default Form;
