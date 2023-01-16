import {useState} from 'react'


/*Componente basado en clases con hook con useState*/
/*class Hooks extends Component{

    state = {contador:0}

    incrementar = () => {
        this.setState ({contador: this.state.contador +1})
    }
    render() {

        return (
            <div>
                contador: {this.state.contador}
                <button onClick={this.incrementar}>Incrementar</button>
            </div>
        )
    }
}*/

/*Custom hook*/
const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
        setContador(contador +1)
    }

    return [contador,incrementar]
}


/*Componente funciona con hook useState*/


const Hooks = () => {

    const [contador,setContador] = useContador(0);

    const incrementar = () => {
        setContador(contador +1)
    }

    return (
        <div>
            Contador: {contador}
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default Hooks