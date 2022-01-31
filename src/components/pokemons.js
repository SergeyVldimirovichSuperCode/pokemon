import React from "react"
import Information from "./information"

const Pokemon = ({pokemons, loading}) => { 
    if(loading){
        return <h2>Loading</h2>
    }
    

    return(
        <div className="list_pokemons_group">
        <ul className="list-group list_pokemons">
            {
                
                pokemons.map((pokemon) =>(
                    
                        <li className=" pokemons_name" key={pokemon.name}>
                           <div>
                                <p>{pokemon.name}</p>
                                <Information link={<p>{pokemon.url}</p>}/>
                            </div>
                        </li>
                    
                ))
                
            }
       
        </ul>
        </div>
        
    )
}
export default Pokemon;