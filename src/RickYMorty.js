import React, { useState,useEffect } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import './RickYMorty.css'
export default function RickYMorty() {

    const [personajes,setPersonajes] = useState([])
    const [next,setNext] = useState("")
    const [prev,setPrev] = useState("")

    const getPersonajesData = (url)=>{
        fetch(url)
        .then(resultado=>resultado.json())
        .then(conversion=>{
            console.log(conversion)//COntiene personajes
            setNext(conversion.info.next)
            setPrev(conversion.info.prev)
            setPersonajes(conversion.results)
        })
    }

    useEffect(()=>{
        getPersonajesData("https://rickandmortyapi.com/api/character")
    },[])

    const goNextPage = ()=>{
        if(next){
            getPersonajesData(next)
        }
    }
    const goPrevPage = ()=>{
        if(prev){
            getPersonajesData(prev)
        }
        
    }

    // const card = {
    //     personaje: {
    //         nombre:"Tzuzul"
    //     }
    // }

    //character = personaje
    return (
        <div className="cards">
            <Container nombre="Botones" next={next} nextPage={goNextPage} prev={prev} prevPage={goPrevPage} >
                
            </Container>
            

            {/* Generando un arreglo de elementos de JSX */}
            {personajes.map(personaje=><Card key={personaje.id} personaje={personaje}/>)}
        </div>
    )
}
