import React, { useState } from "react";
import { IPokemonAPI } from "../../App";
import './style.css'

interface IAutoCompleteProps {
  options: IPokemonAPI[]
}

const AutoComplete: React.FC<IAutoCompleteProps> = ({
  options,
}) => {
  const [inputPokemon, setInputPokemon] = useState<string>('')
  const [showResult, setShowResult] = useState<boolean>(false)
  const [resultPokemon, setResultPokemon] = useState<IPokemonAPI[]>([])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;

    const filterPokemon = options.filter(
      (option) => {
        return option.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      }

    );

    setInputPokemon(userInput)
    setShowResult(true)
    setResultPokemon(filterPokemon)
  };

  let pokemonList;
  if (showResult && inputPokemon) {
    if (resultPokemon.length) {
      pokemonList = (
        <ul className="options">
          {resultPokemon.map((pokemon, index) => {
            let string = pokemon.name.substr(
              0,
              pokemon.name.toLowerCase().indexOf(inputPokemon.toLowerCase())
            );
            let endString = pokemon.name.substr(
              pokemon.name.toLowerCase().indexOf(inputPokemon.toLowerCase()) +
              inputPokemon.length
            );
            let highlightedText = pokemon.name.substr(
              pokemon.name.toLowerCase().indexOf(inputPokemon.toLowerCase()),
              inputPokemon.length
            );
            return (
              <li key={index}>
                {string}
                <span className="highlight-text">
                  {highlightedText}
                </span>
                {endString}
              </li>
            );
          })}
        </ul>
      );
    } else {
      pokemonList = (
        <div className="no-options">
          <em>No Option!</em>
        </div>
      );
    }
  }

  return (
    <div>
      <div className="search">
        <input
          type="text"
          className="search-box"
          onChange={onChange}
          value={inputPokemon}
        />
      </div>
      {pokemonList}
    </div>
  )
}

export { AutoComplete }