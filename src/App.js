import "./App.css";

const App = () => {
  const token = process.env.REACT_APP_MY_TOKEN;

  let req = new Request(`https://api.thecatapi.com/v1/images/search?breed_id=beng`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": token,
    },
    mode: "cors",
  });

  const fetchFunc = (req) => {
    fetch(req)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };
  fetchFunc(req);

  return (
    <div className="App">
      <p>Hello world</p>
    </div>
  );
};

export default App;
