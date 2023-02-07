import { Routes,Route, Link,useNavigate} from "react-router-dom";


function App() {

    const navigate = useNavigate();
    console.log(navigate)

    const forward = () => {
        navigate(1)
    }

    const back = () => {
        navigate(-1)
    }

    const push = (url) => {
        navigate(url)
    }

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
                <button onClick={back} >Back</button>
                <button onClick={forward} >Forward</button>
                <button onClick={() => push('chanchitofeliz')} >Push</button>
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
