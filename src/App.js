import "./App.css";

function App() {
  const fetchFunc = (breedInput) => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedInput}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  }
  fetchFunc("beng")

  return (
    <div className="App">
      <p>Hello world</p>
    </div>
  );
}

export default App;