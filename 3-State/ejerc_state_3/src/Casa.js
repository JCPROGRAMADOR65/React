function Casa(props) {
  return (
    <div>
      <p>Metros:{props.datos.metros}</p>
      <p>Año de construcion:{props.datos.anyo}</p>
      <p>Habitaciones:{props.datos.habitaciones}</p>
      <p>Finca:{props.datos.terreno}</p>
      <p>Garaje:{props.datos.garaje ? "1 plaza" : "No tiene"} </p>
      <p>Ascensor:{props.datos.ascensor ? "De la finca" : "No tiene"}</p>
      <p>Trastero:{props.datos.trastero ? "privado" : "No tiene"}</p>
    </div>
  );
}
export default Casa;
