import {useState, useEffect, Component} from "react";

const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
        setContador(contador +1)
    }

    return [contador,incrementar]
}

/*Componente funcional con useEffect*/
/*const Interval = ({ contador }) => {
    useEffect(() => {
        const i = setInterval(() => console.log(contador),1000)
        return () => clearInterval(i)
    }, [contador])

    return (
        <p>Intervalo</p>
    )
}*/

/*Componente basado en clase para useEffect*/
class Interval extends Component{

    intervalo = ''

    componentDidMount() {
        this.intervalo = setInterval(() => console.log(this.props.contador),1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalo)
    }

    render() {

        return(
            <div>
               <p>Intervalo</p>
            </div>
        )
    }
}

const Effect = () => {

    const [contador, incrementar] = useContador(0);

    useEffect(() => {
        console.log('Soy un efecto')
        document.title = contador
    },[contador])
    console.log("Nos estamos renderizando");
    return (

        <div>
            Contador: {contador}
            <button onClick={incrementar}>Incrementar</button>
            <Interval contador = {contador}/>
        </div>
    )
}



export default Effect