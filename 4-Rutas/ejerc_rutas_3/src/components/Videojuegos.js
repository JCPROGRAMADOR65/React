import { Link } from "react-router-dom";

function videojuegos({ videojuego, full }) {
  if (!full) {
    return (
      <div>
        <Link to={"/" + videojuego.titulo.replaceALL("", "-")}>
          <h1>{videojuego}</h1>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="card">
        <h2>{videojuego.titulo}</h2>
        <p>Año: {videojuegos.anyo}</p>
        <p>Plataforma: {videojuegos.plstsfotma}</p>
        <p>Creador: {videojuegos.creador}</p>
        <p>Genero: {videojuegos.genero}</p>
        <p>{videojuegos.sinopsis}</p>
      </div>
    );
  }
}

export default Videojuego;
