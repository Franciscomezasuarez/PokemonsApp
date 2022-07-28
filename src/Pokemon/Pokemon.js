import { useState } from "react"

function Pokemon(props) {

    const [imagen, setImagen] = useState(pokemon.sprites.front)

    const handleChangeImagenFrente = () => {
        setImagen(pokemon.sprites.front)
    }

    const handleChangeImagenAtras = () => {
        setImagen(pokemon.sprites.back)
    }

    const handleChangeImagenFemenina = () => {
        setImagen(pokemon.sprites.female)
    }

    const handleChangeImagenShiny = () => {
        setImagen(pokemon.sprites.shiny)
    }

    


}


export default Pokemon