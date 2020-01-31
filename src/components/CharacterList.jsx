import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacterData(res.data.results);
      })
      .catch(err => {
        console.log("err", err);
      });
  }, []);

  return (
    <section className="character-list">
      {characterData.map(character => {
        return <CharacterCard characterInfo={character} />;
      })}
    </section>
  );
}
