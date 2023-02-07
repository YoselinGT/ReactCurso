import {createContext,useContext, useState} from "react";

const Contexto = createContext({valor:false, toggle: () => {}})

const Provider = ({children}) => {
    debugger;
    const [valor,setValor] = useState(false)
    const value = {
        valor,
        toggle: () => setValor(!valor)
    }
    return (
        <Contexto.Provider value={value}>
            {children}
        </Contexto.Provider>
    )
}

const Componente = () => {
    debugger;
    const {valor, toggle } = useContext(Contexto)

    return (
        <div>
            <label>{valor.toString()}</label>
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}

const App = () => {
    return (
        <Provider>
            <Componente></Componente>
        </Provider>
    )
}
export default App