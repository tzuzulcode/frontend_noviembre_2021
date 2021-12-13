import React,{useState,createContext} from 'react'
import Container from './components/Container'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Productos from './components/Productos'

const Context = createContext()

export default function EjemploAplicacion() {

    const [logged, setLogged] = useState(false)

    const productos = [{id:1,nombre:"Laptop",descripcion:"Laptop de 15 pulgadas con estas caracteristicas",img:"https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
    {id:2,nombre:"Laptop 2",descripcion:"Laptop de 15 pulgadas con estas caracteristicas",img:"https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
    {id:3,nombre:"Laptop 3",descripcion:"Laptop de 15 pulgadas con estas caracteristicas",img:"https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}]
    return (
        <Context.Provider value={logged}>
            <Container background="white">
                <Navbar/>
                <Hero/>
                <Productos productos={productos}/>
            </Container>
            
            <button onClick={()=>{setLogged(true)}}>Iniciar sesion</button>

        </Context.Provider>
    )
}


export {Context}