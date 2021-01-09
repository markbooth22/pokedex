import React from "react";
import "./Pokemon.css"
import Types from "../Types/Types"

const Pokemon = (props) => {
  const {pokemon} = props

  return(
    <div className="Pokemon">
      <img src={pokemon.sprites["front-default"]} alt={pokemon.name}/>
      <h1>{pokemon.name} <br/> #{pokemon.id}</h1>
      <Types types={pokemon.types} />
      
    </div>

  )
}

export default Pokemon;