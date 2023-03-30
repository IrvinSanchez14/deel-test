import React, { useState } from "react";
import { List } from "../List/List";
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
      {showResult && inputPokemon && (
        <List resultPokemon={resultPokemon} inputPokemon={inputPokemon} />
      )}
    </div>
  )
}

export { AutoComplete }