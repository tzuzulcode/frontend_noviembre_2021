import React,{useState,useEffect} from 'react'

export default function Boton() {

    //Escribimos codigo de JS y los hooks
    //Hooks -> useAlgo

    //useState -> recibe el estado inicial, nos devuelve un arreglo

    //contador-> lee el valor del estado
    //cambiarContador-> cambiar el valor del estado
    const [contador,cambiarContador] = useState(10)

    useEffect(function (){
        alert("Ha cambiado")
    },[contador])//Si no agregamos el segundo parametro, será infinito
    // Si el arreglo esta vacio, solo se ejecuta una sola vez

    function aumentarValor(){
        cambiarContador(contador+1)
    }

    const restarValor = ()=>{
        cambiarContador(contador-1)
    }
    const restarValor10 = ()=>{
        cambiarContador(contador-10)
    }

    return (
        <>
            <p>Presiona el boton</p>
            <button onClick={aumentarValor}>Aumentar</button>
            <button onClick={restarValor}>Reducir</button>
            <button onClick={restarValor10}>Restar 10</button>
            <div>
                <p>{contador}</p>
            </div>
        </>
    )
}

