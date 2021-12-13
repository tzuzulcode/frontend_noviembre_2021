import React,{useContext} from 'react'
import { Context } from '../EjemploAplicacion'
import { Link } from 'react-router-dom'

export default function Item() {
    const logged = useContext(Context)
    return (
        <li>
            {logged?<Link to="/rickymorty">Tzuzul</Link>:<a href="#">Ir a algo</a>}
        </li>
    )
}
