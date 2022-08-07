import Pelicula from './Pelicula'

function Catalogo(props) {
  return (
    <div className='catalogo'>
      {props.catalogo.map((pelicula, index) => {
        return (
          <Pelicula
            full={false}
            cartel={pelicula.cartel}
            titulo={pelicula.titulo}
          />
        )
      })}
    </div>
  );
}
export default Catalogo;
