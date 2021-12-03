import React,{useContext} from 'react'
import { Context } from '../EjemploAplicacion'

export default function Item() {
    const logged = useContext(Context)
    return (
        <li>
            {logged?<a href="/mi_perfil">Tzuzul</a>:<a href="#">Ir a algo</a>}
        </li>
    )
}
