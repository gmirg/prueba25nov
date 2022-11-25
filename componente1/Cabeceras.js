// Componente 1:
// Tipo de componente: Funcional
// Nombre: Cabeceras
// props: titulo1="Título principal", titulo2="Subtítulo", titulo3="Tercer título"
// Contenido: h1, h2 y h3 con sus correspondientes títulos a partir de las props
import React from 'react';

function Cabeceras(props) {

    return (
        <div>
            <h1>{ props.titulo1 }</h1>
            <h2>{ props.titulo2 }</h2>
            <h3>{ props.titulo3 }</h3>
        </div>
    )
}
export default Cabeceras;