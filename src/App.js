import { useState, useEffect } from "react";

const App = () => {
  const token = process.env.REACT_APP_MY_TOKEN;

  const [images, setImages] = useState(`https://cdn2.thecatapi.com/images/MTc5OTc4Ng.jpg`);

  /* useEffect(() => {
    handleFetch();
  }, []); */

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
    <div className="container mx-auto">
      <div className="grid grid-cols-3">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={images} alt=""/>
          <p>Hello world</p>
          <button onClick={handleFetch}>Get Random Cat</button>
        </div>  
        <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by image.user
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            image.views
          </li>
          <li>
            <strong>Downloads: </strong>
            image.downloads
          </li>
          <li>
            <strong>Likes: </strong>
            image.likes
          </li>
        </ul>
      </div>      
      </div>
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