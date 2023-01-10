function sendRequest(method, body){
    fetch("https://opjzr88ro7.execute-api.ca-central-1.amazonaws.com/dev", {
      method: method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
};

export default sendRequest;


