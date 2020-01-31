import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  return (
    <section className="search-form">
      <form>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Hunts</button>
      </form>
    </section>
  );
}
