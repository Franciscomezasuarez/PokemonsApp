import React, { useEffect, useState } from "react"



const Combat = (props) => {

    //Pokemon 1
    const [poke1, setPoke1] = useState({})
    const [hp1, setHp1] = useState("")
    const [dmg1, setDmg1] = useState("")
    const [imagePkmn, setImagePkmn] = useState("")
    const [searchPkm, setSearchPkmn] = useState("")
    const [texto, setTexto] = useState("")


    //Pokemon 2
    const [poke2, setPoke2] = useState({})
    const [hp2, setHp2] = useState("")
    const [dmg2, setDmg2] = useState("")
    const [texto2, setTexto2] = useState("")
    const [searchPkm2, setSearchPkmn2] = useState("")
    const [imagePkmn2, setImagePkmn2] = useState("")
 

    useEffect( () => {
        
        fetch("https://pokeapi.co/api/v2/pokemon/" + searchPkm) 
        .then(res => res.json())
        .then(
            (data) => {

                // Sprites for render pokemon.
                setImagePkmn(data.sprites.front_default)
                setPoke1(data)
                setHp1(data.stats[0].base_stat)
                setDmg1(data.stats[1].base_stat)


                // console.log(data.abilities)

            }
        )
    }, [texto])

    useEffect( () => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + searchPkm2) 
        .then(res => res.json())
        .then(
            (data) => {

                // Sprites for render pokemon.
                setImagePkmn2(data.sprites.front_default)
                setPoke2(data)
                setHp2(data.stats[0].base_stat)
                setDmg2(data.stats[1].base_stat)

                // console.log(data.sprites.front_default)
            }
        )
    }, [texto2])


    //Busqueda pokemon 1
    const handleChange = (pkmn) => {
        setSearchPkmn(pkmn.target.value)
        
    }

    const clickUsuario = (evento) => {
        setTexto(searchPkm)
    }

    //Combate

    const damage1 = (damage) => {
        console.log(damage)
        setDmg1(true)
        setDmg2(false)
        setHp2(hp2 - dmg1.base_stat)
    }

    const damage2 = (damage) => {
        console.log(damage)
        setDmg1(false)
        setDmg2(true)
        setHp1(hp1 - dmg2.base_stat)
    }



    //Busqueda pokemon 2
    const handleChange2 = (pkmn2) => {
        setSearchPkmn2(pkmn2.target.value)
        
    }

    const clickUsuario2 = (evento) => {
        setTexto2(searchPkm)
    }

    

    return (
        <div className="container">
            
            <div className="pokemon1">

                <input placeholder="pokemon name..." type="text" onChange={ (pkmn) => { handleChange(pkmn) } } />
                <button className='button' type="button" onClick={clickUsuario}>Buscar</button>

                <div>

                    <img src={imagePkmn} />
                    <br></br>
                    Vida: {hp1}
                    

                    {poke1.abilities?.map((habilidad, idx) => {
                        return(
                            <div id="div" key={idx}>
                                <button onClick={damage1}> {habilidad.ability.name} </button>
                            </div>)
                    })}
                    ataque: {dmg1}
                </div>


            </div>


            <div className="pokemon2">

                <input placeholder="pokemon name..." type="text" onChange={ (pkmn2) => { handleChange2(pkmn2) } } />
                <button type="button" onClick={clickUsuario2}>Buscar</button>
                
                <img src={imagePkmn2} />
                    <br></br>
                    Vida: {hp2}

                    {poke2.abilities?.map((habilidad, idx) => {
                        return(
                            <div id="div" key={idx}>
                                <button onClick={damage2}>{habilidad.ability.name} </button>
                            </div>)
                    })}
                    ataque: {dmg2}
                    
            </div>
            
        </div>
    )

}




export default Combat;