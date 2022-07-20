import './App.css'
import  './datos/videoclub'

// Components Import //
import Cabecera from './Cabecera';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <>
      <Cabecera />
      <Main peliculas={""}/>
      <Footer />
    </>
  );
}  
export default App;
