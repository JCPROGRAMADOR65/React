import './Cabecera.css'

function Cabecera(props) {
  if (props.user.logged) {
    return (
      <header>
        <h1>videoclub SuperStart</h1>
      </header>
    );
  } else {
    return (
      <header>
        <h1>Videoclub SuperStart</h1>
      </header>
    );
  }
} 
export default Cabecera;
