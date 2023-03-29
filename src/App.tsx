import React, { useEffect, useState } from 'react';
import { AutoComplete } from './component/AutoComplete/AutoComplete';
import './style.css'

export interface IPokemonAPI {
  name: string
  url: string
}

function App() {
  const [pokemon, setPokemon] = useState<IPokemonAPI[]>([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data.results));
  }, [])

  return (
    <div className="App">
      <AutoComplete options={pokemon} />
    </div>
  );
}

export default App;
