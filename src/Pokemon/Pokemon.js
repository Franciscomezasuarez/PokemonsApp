import React, { Fragment } from "react";
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../api";
import _ from "lodash";

const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch();
    const pokemonState = useSelector(state => state.Pokemon);
    React.useEffect(() => {
      dispatch(GetPokemon(pokemonName))
    }, []);

    const ShowData = () => {
        if (!_.isEmpty(pokemonState.data[pokemonName])) {
          const pokeData = pokemonState.data[pokemonName];
          return(
            <Fragment>
              <div className={"pokemon-wrapper"}>
                <div className={"item"}>
                  <h1>Sprites</h1>
                  <img src={pokeData.sprites.front_default} alt=""/>
                  <img src={pokeData.sprites.back_default} alt=""/>
                  <img src={pokeData.sprites.front_shiny} alt=""/>
                  <img src={pokeData.sprites.back_shiny} alt=""/>
                </div>
                <div class="section-top-border">
                  <h3 class="mb-30">Stats</h3>
                    <div class="progress-table-wrap">
                      <div class="progress-table">
                        <div class="table-head">
                          <div class="country">Name</div>
                          <div class="visit">Base Stats</div>
                        </div>
                        {pokeData.stats.map(el => {
                          return (                        
                            <div class="table-row">
                              <div class="country">{el.stat.name}</div>
                              <div class="visit">{el.base_stat}</div>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h1>Abilities</h1>
                  {pokeData.abilities.map(el => {
                    return <p>{el.ability.name}</p>
                  })}
                </div>
              </div>
            </Fragment>
          )
        }
    
        if (pokemonState.loading) {
          return <p>Loading...</p>
        }
    
        if (pokemonState.errorMsg !== "") {
          return <p>{pokemonState.errorMsg}</p>
        }
    
        return <p>error getting pokemon</p>
      }
    
      return(
        <Fragment>      
          <SimpleHeader pokemonName={pokemonName} />      
          <div className={"container"}>
            {ShowData()}
          </div>
        </Fragment>
      )
    };

export default Pokemon