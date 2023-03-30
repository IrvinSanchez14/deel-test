import React, { useEffect, useState } from 'react';
import { AutoComplete } from './component/AutoComplete/AutoComplete';
import './style.css'

export interface IPokemonAPI {
  name: string
  url: string
}

function App() {
  const [pokemon, setPokemon] = useState<IPokemonAPI[]>([])

  const loadData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API}`)
    const dataPokemon = await response.json()

    return setPokemon(dataPokemon.results)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="App">
      <AutoComplete options={pokemon} />
    </div>
  );
}

export default App;
