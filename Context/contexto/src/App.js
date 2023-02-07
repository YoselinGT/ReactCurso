import {createContext,Component,useContext} from "react";

const Context1 = createContext('mi primer contexto')
const Context2 = createContext('mi segundo contexto')

const Provider = ({children}) => {
    return (
        <Context1.Provider value="valor 1">
            <Context2.Provider value="valor 2">
                {children}
            </Context2.Provider>
        </Context1.Provider>
    )
}

class Componete extends Component {
    render() {
        return(
            <Context1.Consumer>
                {
                    valor1 =>
                        <Context2.Consumer>
                            {valor2 => <div>{`${valor1} ${valor2}`}</div>}
                        </Context2.Consumer>
                }
            </Context1.Consumer>
        )
    }
}

const Componente2 = () => {
    const valor1 = useContext(Context1)
    const valor2 = useContext(Context2)
    return (
        <div>{`${valor1} ${valor2}`}</div>
    )
}

const App = () => {
    return(
        <Provider>
            <Componete></Componete>
            <Componente2></Componente2>
        </Provider>
    )
}

export default App