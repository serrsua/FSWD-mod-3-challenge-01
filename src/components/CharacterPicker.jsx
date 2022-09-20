import { useState } from "react";
import { useEffect } from "react";
import { getCharacters } from "../service"
import Characters from "./Characters";

const CharacterPicker = () => {
  const [characterList, setCharacterList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => setCharacterList(data.results))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="page">
      {isLoading && <span className="loading-text">Cargando...</span>}

      <div className={image}>
        <img src={image} alt="Hacé click sobre un personaje" />
      </div>

      {characterList.map((char) => (
        <Characters
          key={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          imageUrl={char.image}
          setImage={setImage}
        />
      ))}
    </div>
  );
};

export default CharacterPicker;
