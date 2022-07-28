
export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        const data = await response.json()
        return data;
    } catch(err) {}
};

export const getPokemons = async (limit = 151, offset = 0) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {}
};

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data;
    } catch(err){}
}

export const GetPokemon = (pokemon) => async dispatch => {
    try {
      dispatch({
        type: "POKEMON_MULTIPLE_LOADING"
      });
  
      const res = await GetPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  
      dispatch({
        type: "POKEMON_MULTIPLE_SUCCESS",
        payload: res.data,
        pokemonName: pokemon
      })
    } catch (e) {
      dispatch({
        type: "POKEMON_MULTIPLE_FAIL",
      })
    }
  };