import React,{useState,createContext} from 'react'
const carritoContext = createContext()


export default function CarritoContext({children}) {
    const [carrito,setCarrito] = useState([])

    const agregarAlCarrito=(nuevo)=>{
        setCarrito([...carrito,nuevo])
    }
    const retirarDelCarrito=(id)=>{
        const carritoNuevo = carrito.filter(producto=>producto.id!==id)
        setCarrito(carritoNuevo)
    }
    return (
        <carritoContext.Provider value={{carrito,agregarAlCarrito,retirarDelCarrito}}>
            {children}
        </carritoContext.Provider>
    )
}

export {carritoContext}