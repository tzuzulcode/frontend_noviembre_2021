import React, { useState } from 'react'

export default function Card({personaje}) {
    const [volteada,setVolteada]=useState(false)
    //const personaje = props.personaje
    //props es un objeto

    // return (
    //     <div className="card" key={props.personaje.id}>
    //         <img src={props.personaje.image} className="card-image"></img>
    //         <p className="card-detail">{props.personaje.name}</p>
    //         <p className="card-detail">{props.personaje.gender}</p>
    //         <p className="card-detail">{props.personaje.species}</p>
    //         <p className="card-detail">{props.personaje.status}</p>
    //     </div>
    // )

    const voltearTarjeta = ()=>{
        console.log(personaje)
        setVolteada(!volteada)
    }

    return (
        // <div className="card" onClick={()=>{alert("Volteaste a: "+personaje.name)}}>
        <div className="card" onClick={voltearTarjeta}>
            {!volteada&&<img src={personaje.image} className="card-image"></img>}
            <p className="card-detail">{personaje.name}</p>
            <p className="card-detail">{personaje.gender}</p>
            <p className="card-detail">{personaje.species}</p>
            <p className="card-detail">{personaje.status}</p>
            {volteada&&<p className="card-detail">{personaje.location.name}</p>}
            {volteada&&<p className="card-detail">{personaje.origin.name}</p>}

        </div>
    )

}
