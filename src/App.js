import React, {useState, useEffect} from "react";
import axios from 'axios';
import Pokemon from "./components/pokemons";
import Pagination from "./components/pogination";


export default function App() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage] = useState(12)

  useEffect(()=>{
    const getPokemons = async () => {
      setLoading(true)
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
      setPokemons(res.data.results)
      setLoading(false)
      
    }
    getPokemons()
  },[]);
  
  const lastPokemonsIndex = currentPage * pokemonsPerPage

  const firstPokemonsIndex = lastPokemonsIndex - pokemonsPerPage

  const currentPokemons = pokemons.slice(firstPokemonsIndex, lastPokemonsIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)


  return(
    <div>
      
      
      <Pokemon pokemons={currentPokemons} loading={loading} />
      <Pagination  pokemonsPerPage={pokemonsPerPage} totalPokemons={pokemons.length} paginate={paginate} />
    </div>
  )
}
