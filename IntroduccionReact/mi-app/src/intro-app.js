import logo from './logo.svg';
//import './App.css';
import './main.css'

const estilo = (bg="#333") => ({
  backgroundColor:bg,
  color:"#ffffff",
  padding:"10px 15px",
  marggin:"10px 15px"
})

const estilo2 = {
  boxShadow:'0 5px 3px rgba(0,0,0,0.5)',
  color:"#ffffff"
}

//<li className='clase-li' style={{...estilo2,...estilo("#750")}}>{children}</li>
//<ul style={estilo("#750")} className='clase-css'>
const Li = ({children,estado}) =>{
  console.log(children,estado)
  return (
    <li className='clase-li'>{children}</li>
  )
}
function App() {
  const valor = 'triste'
  return (
    <ul className='clase-css'>
      <Li estado = "feliz">Valor de Li</Li>
    </ul>
  );
}

export default App;
