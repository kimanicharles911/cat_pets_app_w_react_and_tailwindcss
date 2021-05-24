import { useState } from "react";

const AuthFailureComponent = () => {
  const false_token = process.env.REACT_APP_MY_FALSE_TOKEN;

  const [rawObject, setRawObject] = useState();
  const [rawMessage, setRawMessage] = useState();
  const [responseStatus, setResponseStatus] = useState();
  const [messageStatus, setMessageStatus] = useState();

  const handleFalseAuth = () => {
    fetch(`https://api.thecatapi.com/v1/votes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": false_token,
      },
    })
      .then(function (response) {
        console.log(response);
        setResponseStatus(response.status)
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setRawObject(JSON.stringify(data));
        setRawMessage(data.message);
        setMessageStatus(data.status)
      })
      .catch((err) => console.log(err));
  };
  handleFalseAuth();  

  return (
    <div className="App">
      <p className="mt-20 flex justify-center text-purple-500">Response Status: <span className="text-blue-500">&nbsp;{responseStatus}</span></p>
      <p className="flex justify-center text-purple-500">Object: <span className="text-blue-500">&nbsp;{rawObject}</span></p>
      <p className="flex justify-center text-purple-500">Message: <span className="text-blue-500">&nbsp;{rawMessage}</span></p>
      <p className="flex justify-center text-purple-500">Message Status: <span className="text-blue-500">&nbsp;{messageStatus}</span></p>
      <p className="flex justify-center">Check your console below for more info.</p>
    </div>
  );
};

export default AuthFailureComponent;