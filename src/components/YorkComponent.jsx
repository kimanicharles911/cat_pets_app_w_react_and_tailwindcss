import { useState, useEffect } from "react";

const YorkComponent = () => {

  const token = process.env.REACT_APP_MY_TOKEN;

  const [images, setImages] = useState(``);

  const [name, setNames] = useState();
  const [description, setDescription] = useState();
  const [temperament, setTemperament] = useState();
  const [affectionLevel, setAffectionLevel] = useState();
  const [lifeSpan, setLifeSpan] = useState();
  const [weight, setWeight] = useState();
  const [origin, setOrigin] = useState();

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=ycho`, {
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
        setNames(data[0].breeds[0].name);
        setDescription(data[0].breeds[0].description);
        setTemperament(data[0].breeds[0].temperament );
        setAffectionLevel(data[0].breeds[0].affection_level );
        setLifeSpan(data[0].breeds[0].life_span );
        setWeight(data[0].breeds[0].weight.imperial );
        setOrigin(data[0].breeds[0].origin );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto">
      <div className="grid justify-center mt-20">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="" src={images} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
              {name}
            </div>
            <ul>
              <li>
                {description}
              </li>
              <li>
                <strong>Temperament: </strong>
                {temperament}
              </li>
              <li>
                <strong>Affection Level: </strong>
                {affectionLevel}/5
              </li>
              <li>
                <strong>Life Span: </strong>
                {lifeSpan}
              </li>
              <li>
                <strong>Weight: </strong>
                {weight} Pounds
              </li>
              <li>
                <strong>Origin: </strong>
                {origin}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button onClick={handleFetch}>Get Random Cat</button>
    </div>
  );
};

export default YorkComponent;
