// Componente 3:
// Tipo: Funcional
// Nombre: PiePagina
// props: email=thebridge@gmail.com, cidudad="Madrid", direccion="Paseo de Recoletos 15"
// Contenido: un footer con los datos de las props
import React from 'react';
function PiePagina(props) {
    return (
        <footer>
            <p>{props.email}</p>
            <p>{props.ciudad}</p>
            <p>{props.direccion}</p>
        </footer>
    )
}
export default PiePagina;