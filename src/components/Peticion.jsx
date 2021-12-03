import React,{useState,useEffect,useRef} from 'react'
import styled from 'styled-components'

const MiBotonPersonalizado = styled.button`
    background-color: cornflowerblue;
    margin:10px;
    padding:50px;
`

export default function Peticion() {

    const [personajes,actualizarPersonajes] = useState([{"nombre":"Rick"},{"nombre":"Morty"}])
    const [personajesFiltrados,actualizarPersonajesFiltrados] = useState([])
    const [personajesPeticion,setPersonajesPeticion] = useState([]) // Poner el estado inicial en el tipo de dato que esperamos

    const [show,setShow] = useState(true)

    const inputBusqueda = useRef("")

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(resultado=>resultado.json())
        .then(conversion=>{
            console.log(conversion.results)//COntiene personajes
            setPersonajesPeticion(conversion.results)
        })
    },[])

    const agregarPersonaje = ()=>{
        //Spread operator
        actualizarPersonajes([...personajes,{"nombre":"Tzuzul"}])

        //personajes.push({"nombre":"Tzuzul"})
    }
    const filtrar = ()=>{
        setShow(false)
        const filtro = personajes.filter((personaje)=>
        {
            return personaje.nombre.toUpperCase().includes(
                inputBusqueda.current.value.toUpperCase()
            )
        })

        actualizarPersonajesFiltrados(filtro)
    }

    // Filtrar la informacion
    //Un input de texto para la busqueda
    //Actualizar la informacion en pantalla

    return (
        <div>
            {/* {[<p>Rick</p>,<p>Morty</p>]} */}
            <p>Personajes originales</p>
            {/* {show?personajes.map(personaje=><p>{personaje.nombre}</p>):<></>} */}
            {show&&personajes.map((personaje,index)=><p key={index}>{personaje.nombre}</p>)}

            <p className="titulo">Personajes filtrados</p>
            {personajesFiltrados.map((personaje,index)=><p key={index}>{personaje.nombre}</p>)}
            
            <p>Personajes de la peticion</p>
            {personajesPeticion.map(personaje=><p key={personaje.id}>{personaje.name}</p>)}

            <button style={{
                backgroundColor:"cornflowerblue",
                margin:"10px",
                padding:"50px"
            }} onClick={agregarPersonaje}>Agregar personaje</button>

            <MiBotonPersonalizado> Agregar personaje </MiBotonPersonalizado>

            <p>Ingresar busqueda:</p>
            <input type="text" ref={inputBusqueda} />
            <button onClick={filtrar}>Buscar</button>
        </div>
    )
}
