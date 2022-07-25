function Lista(props) {
  return (
    <ul>
      {props.lista.map((compositor, index) => (
        <li key={index}>{compositor.nombre}</li>
      ))}
    </ul>
  );
}
export default Lista;
