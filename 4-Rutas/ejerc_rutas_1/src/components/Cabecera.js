import {Link} from 'react-router-dom'

function Cabecera(props) {
    return ( <header>
        <nav>
        <Link to="/">Inicio</Link>
        <Link to="/meses">Meses</Link>
        <Link to="/dias">Dias</Link>
        </nav>
    </header>);
}
export default Cabecera;