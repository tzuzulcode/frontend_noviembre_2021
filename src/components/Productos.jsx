import React, { useState } from 'react'
import Producto from './Producto'

export default function Productos({productos}) {
    
    return (
        <section>
            {productos.map((producto)=><Producto key={producto.id} producto={producto}/>)}
        </section>
    )
}
