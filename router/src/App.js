import { Routes,Route, Link,useLocation} from "react-router-dom";

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

function App() {

    const query = useQuery()
    console.log(query)
    const chancho = query.get('chanchito')
    console.log(chancho)
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/perfil">Perfil</Link>
                    </li>
                </ul>
            </nav>
            <section>

                <Routes>
                    <Route exact path="/" element={ <h1>Inicio</h1>} />
                    <Route exact path="/perfil" element={ <h1>Perfil</h1>} />
                    <Route path="*" element={ <h1>404: ruta no encontrada</h1>} />
                </Routes>
            </section>
        </div>
    );
}

export default App;
