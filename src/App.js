import React from "react";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <Header />
      <AppRouter />
    </div>
  );
}
