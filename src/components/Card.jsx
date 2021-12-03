import React from 'react'

export default function Card({personaje}) {

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
    return (
        <div className="card">
            <img src={personaje.image} className="card-image"></img>
            <p className="card-detail">{personaje.name}</p>
            <p className="card-detail">{personaje.gender}</p>
            <p className="card-detail">{personaje.species}</p>
            <p className="card-detail">{personaje.status}</p>
        </div>
    )

}
