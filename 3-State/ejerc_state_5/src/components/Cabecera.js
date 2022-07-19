function Cabecera(props) {
  return (
    <header>
      <div>
        <h1>Biblioteca publica de España</h1>
        <p>
          {props.biblioteca.usuario.vip
            ? "Hola," + props.biblioteca.usuario.nombre
            : props.biblioteca.usuario.nombre}{" "}
        </p>
        <img
          src={props.biblioteca.usuario.imagen}
          alt={props.biblioteca.usuario.name}
        />
      </div>
    </header>
  );
}
export default Cabecera;
