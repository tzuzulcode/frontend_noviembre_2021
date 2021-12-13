import React,{useState,createContext} from 'react'
import Container from './components/Container'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const Context = createContext()

export default function EjemploAplicacion() {

    const [logged, setLogged] = useState(false)
    return (
        <Context.Provider value={logged}>
            <Container background="white">
                <Navbar/>
                <Hero/>
            </Container>
            
            <button onClick={()=>{setLogged(true)}}>Iniciar sesion</button>

        </Context.Provider>
    )
}


export {Context}