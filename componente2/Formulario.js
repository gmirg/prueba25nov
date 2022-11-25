// Componente 2:
// Tipo: Clase
// Nombre: Formulario
// states: email y pass
// Contenido: formulario de login
// Comportamiento: Un console.log cuando cambien los estados con el contenido
import React, { useEffect, useState } from 'react';

function Formulario() {

  // Estados para el nombre, la edad e info.
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // Está a la espera de cualquier cambio que haya en email.
  useEffect(() => {
      if (email !== ""){
          console.log(`${email}`)
      } 
  }, [email]);

  // Está a la espera de cualquier cambio que haya en pass.
  useEffect(() => {
      if (pass !== ""){
          console.log(pass);
      } 
  }, [pass]);

  useEffect(() => {
      console.log("Carga la página");
  }, []);

  return (
      <div>
          {/* Inputs donde se recogelos valores si hay un cambio, y se mete al state. */}
          <input type="text" className="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="text" className="pass" placeholder="Password" onChange={(e) => setPass(e.target.value)} />

          <p><span>(e.target.value)</span></p>
        
      </div>
  )
}
