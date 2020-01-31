import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      console.log(response);
      const characters = response.data.results.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );

      setData(characters);
    });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div className="locations">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div className="spell">
        {data.map(data => {
          return (
            <div className="character-list " key={data.id}>
              <img src={data.img} />
              <h2>{data.name}</h2>
              <h3 className="capital">Status: {data.status}</h3>
              <h3 className="capital">Gender: {data.gender}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
