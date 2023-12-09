import AnimalShow from "./AnimalShow";
import { useState } from "react";

function getRandomAnimal() {
  const animals = ["bird", "cat", "dog"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function AnimalShowMain() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  const renderAnimals = animals.map((animal, idx) => {
    return <AnimalShow type={animal} key={idx} />;
  });
  return (
    <>
      <div className="section">
        <h1 className="title">Second practice - animal generator</h1>
          <div className="columns">
            <button className="button is-primary" onClick={handleClick}>
              Animals
            </button>
          </div>
          <div className="columns">
            {renderAnimals}
          </div>

      </div>
    </>
  );
}

export default AnimalShowMain;
