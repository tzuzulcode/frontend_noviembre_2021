import React,{useContext, useState} from 'react'
import { carritoContext } from '../context/CarritoContext'

export default function Producto({producto}) {
    const [cart,setCart] = useState(false)
    const {carrito,agregarAlCarrito,retirarDelCarrito} = useContext(carritoContext)

    const addToCart = ()=>{
        setCart(true)
        agregarAlCarrito(producto)
        console.log("Agregado al carrito")
    }

    const removeFromCart=()=>{
        setCart(false)
        retirarDelCarrito(producto.id)
    }
    return (
        <article>
            {console.log(carrito)}
            <h4>{producto.nombre}</h4>
            <p>{producto.descripcion}</p>
            <img src={producto.img} alt={producto.nombre} />
            {cart?<button
                onClick={removeFromCart}
            >Retirar del carrito</button>:
            <button
                onClick={addToCart}
            >
                Agregar al carrito
            </button>}
        </article>
    )
}
