import React, { useContext } from 'react'
import { carritoContext } from '../context/CarritoContext'

export default function Carrito() {
    const {carrito} = useContext(carritoContext)
    return (
        <div>
            {carrito.map(elemento=><div>
                <p>{elemento.nombre}</p>
            </div>
                )}
        </div>
    )
}
