import { useState } from "react"

function Pokemon(props) {

    const [imagen, setImagen] = useState(props.sprites.front, props.sprites.back)

    const handleChangeImagenFrente = () => {
        setImagen(props.sprites.front)
    }

    const handleChangeImagenAtras = () => {
        setImagen(props.sprites.back)
    }

    const handleChangeImagenFemenina = () => {
        setImagen(props.sprites.female)
    }

    const handleChangeImagenShiny = () => {
        setImagen(props.sprites.shiny)
    }

    return (

        <div>
            <h1>{props.name}</h1>
            <img>{handleChangeImagenFrente} src={imagen} alt={props?.name} </img>
            <img>{handleChangeImagenAtras} src={imagen} alt={props?.name} </img>
            <h1>ID:<div>{props.id}</div></h1>
            <h1>Peso:<div>{props?.weight}</div></h1>
            <h1>Experiencia base:<div>{props?.baseExp}</div></h1>
            <div>
                <button onClick={handleChangeImagenShiny}  type="button">Shiny</button>
                {props?.sprites.female && <button onClick={handleChangeImagenFemenina} type="button">Femenina</button>}
            </div>
            <div>
                <h1>Habilidades</h1>
                {props.abilities.map((ability, idx) =>(
                    <div key={idx}>
                        <button disabled type="button">{ability.ability.name}</button>
                    </div>
                ))}
            </div>
            <div>
                <h1>Tipos</h1>
                {props.types.map((type, idx) =>(
                    <div key={idx}>
                        <button disabled type="button">{type.type.name}</button>
                    </div>
                ))}
            </div>
            <div>
                <h1>Movimientos</h1>
                {props?.moves?.map((move, idx) =>(
                    <div key={idx}>
                        <button disabled type="button">{move?.move?.name}</button>
                    </div>
                ))}
            </div>
            <div>
                <h1>Estadisticas</h1>
                {props.stats.map((stat, idx) =>(
                    <div key={idx}>
                        <p>{stat.stat.name}</p>
                        <div>
                            <div>{`${stat.base_stat}`}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )


}


export default Pokemon