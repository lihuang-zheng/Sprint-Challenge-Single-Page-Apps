import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import styled from "styled-components";

const LocationStyle = styled.div`
  margin: 10px;
`;

export default function LocationsList() {
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        setLocationData(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <LocationStyle>
      {locationData.map(location => {
        return <LocationCard locationInfo={location} />;
      })}
    </LocationStyle>
  );
}
