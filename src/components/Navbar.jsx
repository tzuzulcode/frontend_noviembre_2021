import React, { useContext, useState } from 'react'
import Item from './Item'
import { carritoContext } from '../context/CarritoContext'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [menu,setMenu] = useState(false)
    const {carrito} = useContext(carritoContext)

    const showMenu = ()=>{
        setMenu(!menu)
    }
    return (
        <nav className='flex justify-between'>
            <a className="bg-red-100">Base color</a>
            <ul className='flex space-x-5'>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <li>
                    <Link to="/carrito">Carrito {carrito.length}</Link>
                </li>
            </ul>
            <button id="menu" onClick={showMenu}>Menu</button>
        </nav>
    )
}
