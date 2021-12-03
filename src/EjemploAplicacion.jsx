import React,{useState,createContext} from 'react'
import Navbar from './components/Navbar'

const Context = createContext()

export default function EjemploAplicacion() {

    const [logged, setLogged] = useState(false)
    return (
        <Context.Provider value={logged}>
            <Navbar/>
            <button onClick={()=>{setLogged(true)}}>Iniciar sesion</button>

        </Context.Provider>
    )
}


export {Context}