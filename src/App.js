import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
      .then((res) => {
        return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
      })
      .then((res) => {
        const { results } = res;
        setPokedex(results);
        setIsLoading(false)
      });
  }, []);

  return <div className="App"></div>;
}

export default App;
