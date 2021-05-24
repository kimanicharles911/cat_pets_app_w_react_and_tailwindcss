import { useState, useEffect } from "react";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";

const MonthBreedComponent = () => {
  const token = process.env.REACT_APP_MY_TOKEN;

  const [images, setImages] = useState(``);
  // https://cdn2.thecatapi.com/images/ct3.jpg

  const [name, setNames] = useState();
  const [description, setDescription] = useState();
  const [temperament, setTemperament] = useState();
  const [affectionLevel, setAffectionLevel] = useState();
  const [lifeSpan, setLifeSpan] = useState();
  const [weight, setWeight] = useState();
  const [origin, setOrigin] = useState();

  const [likeClick, setLikeClick] = useState(() => {
    const savedLikeState = localStorage.getItem("MonthBreedLikes");
    console.log(JSON.parse(savedLikeState));
    return savedLikeState ? JSON.parse(savedLikeState) : false;
  });
  const [dislikeClick, setDislikeClick] = useState(() => {
    const savedDislikeState = localStorage.getItem("MonthBreedDislikes");
    console.log(JSON.parse(savedDislikeState));
    return savedDislikeState ? JSON.parse(savedDislikeState) : false;
  });
  const handleLike = function () {
    setLikeClick(!likeClick);
    setDislikeClick(false);
  };
  const handleDislike = function () {
    setDislikeClick(!dislikeClick);
    setLikeClick(false);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    localStorage.setItem("MonthBreedLikes", JSON.stringify(likeClick));
    localStorage.setItem("MonthBreedDislikes", JSON.stringify(dislikeClick));
  }, [likeClick, dislikeClick]);

  const handleFetch = () => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=beng`, {
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
        setTemperament(data[0].breeds[0].temperament);
        setAffectionLevel(data[0].breeds[0].affection_level);
        setLifeSpan(data[0].breeds[0].life_span);
        setWeight(data[0].breeds[0].weight.imperial);
        setOrigin(data[0].breeds[0].origin);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto">
      <div className="grid justify-center mt-20">
        {/* grid grid-cols-3 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="" src={images} alt="" />
          {/* max-w-sm max-h-80 */}
          <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2 flex justify-between">
              {name}
              <div className="flex space-x-3">
                {likeClick === false ? (
                  <>
                    <AiOutlineLike
                      className="cursor-pointer"
                      onClick={handleLike}
                    />
                  </>
                ) : (
                  <>
                    <AiFillLike
                      className="cursor-pointer"
                      onClick={handleLike}
                    />
                  </>
                )}

                {dislikeClick === false ? (
                  <>
                    <AiOutlineDislike
                      className="cursor-pointer"
                      onClick={handleDislike}
                    />
                  </>
                ) : (
                  <>
                    <AiFillDislike
                      className="cursor-pointer"
                      onClick={handleDislike}
                    />
                  </>
                )}
              </div>
            </div>
            <ul>
              <li>{description}</li>
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
          <div className=" flex justify-around mb-6">
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleFetch}
            >
              Get Random Cat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthBreedComponent;

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
