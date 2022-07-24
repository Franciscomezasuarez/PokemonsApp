import React, { useEffect, useState } from "react"
import { getPokemonData, getPokemons } from "../api"
import Card from "../Card/Card"
import { searchPokemon } from "../api";
import Searchbar from "../searchbar/Searchbar";




const List = (props) => {
    
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemmons = async () => {
        try {
            const data = await getPokemons();
            console.log(data.results);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url)
            })
            const results = await Promise.all(promises)
            setPokemons(results)
        } catch(err){
    
        }
    }

    const onSearch = async (pokemon) => {
        const result = await searchPokemon(pokemon);
        if (!result) {
        } else {
            setPokemons([result]);
        }
        
    };


    useEffect( () => {
        fetchPokemmons('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(res => res.json())
            .then( (data) => {
                console.log(data)
                setPokemons(data.results)
            })
    }, [])


    return (
        <>
            <div>
              <Searchbar onSearch={onSearch} />
            </div>
            Lista de Pokemones ! <br />
            { pokemons.map( (pokemon, idx) => {
                return (<Card pokemon={pokemon} key={pokemon.name}/>)
            } ) }
        </>
    )
}

export default List
