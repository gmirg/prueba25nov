// Componente 3:
// Tipo: Funcional
// Nombre: PiePagina
// props: email=thebridge@gmail.com, cidudad="Madrid", direccion="Paseo de Recoletos 15"
// Contenido: un footer con los datos de las props
import PiePagina from "./PiePagina";
function App() {
    return (
        <div className="App">
            <PiePagina email= "thebridge@gmail.com" ciudad ="Madrid" direccion="Paseo de Recoletos 15"/>
        </div>
        
    );
}
export default App;