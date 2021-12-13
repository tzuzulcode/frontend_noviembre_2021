import React from 'react'

export default function Container({nombre,next,prev,nextPage,prevPage}) {

    //const nombre = props.nombre

    return (
        <div className="container">
            
            {nombre}
            {next&&<button onClick={nextPage}>Next</button>}
            {prev&&<button onClick={prevPage}>Prev</button>}
        </div>
    )
}
