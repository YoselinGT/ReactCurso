import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Crea un elemento en el dom 
//param 1 = Indica el elemento html a crear
//param 2 = Las propiedas del elemento html
//param 3 = El texto que va a renderizar 
//const x = React.createElement('p',null,'hola mundo')

/*const Li = ({ children,estado,casa,edad }) => {
  console.log(casa,edad)
  return (
    <li>{children} {estado}</li>
  )
}
const X = () =>
<ul>
  <Li estado = {'feliz'} casa={false} edad={24}>Chanchito</Li>
  <Li estado = {'triste'}>Chancito</Li>
  <Li>Felipe</Li>
</ul>  
  */
  
  
/*root.render(
  <X />
)*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
