import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const token = process.env.REACT_APP_MY_TOKEN;

  const [images, setImages] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    fetch(`https://api.thecatapi.com/v1/images/search`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": token,
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setImages(data[0].url);
      })
      .catch((err) => console.log(err));;
  };

  return (
    <div className="App">
      <img src={images} alt=""/>
      <p>Hello world</p>
      <button onClick={handleFetch}>Get Random Cat</button>
    </div>
  );
};

export default App;









/* 
useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=beng`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data[0].url);
        console.log(data[0].url)
      })
      .catch((err) => console.log(err));
  });
*/