import { useState } from "react";

const AuthSuccessComponent = () => {
  const token = process.env.REACT_APP_MY_TOKEN;

  const [responseStatus, setResponseStatus] = useState();
  const [responseOkay, setResponseOkay] = useState();

  const handleAuth = () => {
    fetch(`https://api.thecatapi.com/v1/votes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": token,
      },
    })
      .then(function (response) {
        console.log(response);
        setResponseStatus(response.status);
        setResponseOkay(JSON.stringify(response.ok));
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  handleAuth();
  

  return (
    <div className="App">
      <p className="mt-20 flex justify-center text-purple-500">Response Status: <span className="text-blue-500">&nbsp;{responseStatus}</span></p>
      <p className="flex justify-center text-purple-500">Response Okay? : <span className="text-blue-500">&nbsp;{responseOkay}</span></p>
      <p className="flex justify-center">Check your console below for more info.</p>
    </div>
  );
};

export default AuthSuccessComponent;