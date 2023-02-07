import { Routes,Route, Link} from "react-router-dom";


const Portafolio = () => {
    return (
        <div>
            <h1>Portafolio</h1>
            <ul>
                <li>
                    <Link to={'proyecto-1'}>Proyecto 1</Link>
                </li>
                <li>
                    <Link to={'proyecto-2'}>Proyecto 2</Link>
                </li>
            </ul>
            <Routes>
                <Route exact path={'proyecto-1'} element={<h2>Proyecto 1</h2>} />
                <Route exact path={'proyecto-2'} element={<h2>Proyecto 2</h2>}/>
            </Routes>

        </div>


    )
}

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/portafolio/">Portafolio</Link>
                    </li>
                </ul>
            </nav>
            <section>
                <Routes>
                    <Route exact path="/" element={ <h1>Inicio</h1>} />
                    <Route exact path="/portafolio/*" element ={<Portafolio/>}></Route>
                </Routes>
            </section>
        </div>
    );
}

export default App;
