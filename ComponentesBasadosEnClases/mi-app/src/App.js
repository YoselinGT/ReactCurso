import {Component} from "react"
import Input from './Input'

class Button extends Component {

    state = {}

    constructor(props) {
        super(props);
        console.log("contructor", props);

        //Esto es una mala practica porque no es necesario porque podemos acceder a la propiedad con
        //this.props.chanchito
        //Puede producir errores porque las propiedades pueden estar cambiando, pero sin embargo  hacemos referencia al estado
        /*this.state = {
            chanchito : this.props.chanchito
        }*/

    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component Did Update",prevProps,prevState,snapshot);
    }

    componentWillUnmount() {
        console.log("Desmotando componente",this.props,this.state)
    }

    render() {
        console.log("Ejecutando metodo render de Button");
        return (
            <button onClick={() => this.setState({prop:1}) }>Enviar Componente</button>
        )
    }
}

class App extends  Component {

  state = {
    nombre: '',
    apellido: ''
  }

  updateValues = (prop,value) => {
    this.setState({[prop]:value})
  }

  render(){

    console.log(this.state);

    return (
        <div>
          <p>Hola Mundo</p>
            <p>
                Nombre completo: {`${this.state.nombre} ${this.state.apellido}`}
                <Input value={this.state.nombre} onChange={e => this.updateValues('nombre',e.target.value)}></Input>
                <Input value={this.state.apellido} onChange={e => this.updateValues('apellido',e.target.value)} ></Input>
            </p>

            {this.state.valor ===3 ? <Button chanchito='feliz'></Button> : null}
          <button onClick={() => this.setState({valor:this.state.valor+1})}>Enviar</button>
        </div>
    )
  }
}

export default App;
