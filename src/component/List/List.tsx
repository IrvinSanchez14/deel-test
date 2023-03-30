import React from "react";
import { IPokemonAPI } from "../../App";
import './style.css'

interface IListProps {
  resultPokemon: IPokemonAPI[]
  inputPokemon: string
}

const List: React.FC<IListProps> = ({
  resultPokemon,
  inputPokemon
}) => {
  return (
    <>
      {resultPokemon.length ? (
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
      ) : (
        <div className="no-options">
          <em>Ups no Pokemon!</em>
        </div>
      )}
    </>
  )
}

export { List }