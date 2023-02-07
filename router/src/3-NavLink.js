import { Routes,Route, Link,useMatch,useParams,NavLink} from "react-router-dom";


const Proyecto = () => {
    const match = useMatch("/portafolio/:proyecto_id")
    const {proyecto_id} = match.params
    const params = useParams();
    //console.log(match,params)
    return (
        <h2>Proyecto {proyecto_id}</h2>
    )
}

const Portafolio = () => {
    const match = useMatch("/portafolio/:proyecto_id")
    const params = useParams();
    console.log(match,params)

    let activeClassName = "underline";

    return (
        <div>
            <h1>Portafolio</h1>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => isActive ? activeClassName : undefined }  to={'proyecto-1'}>Proyecto 1</NavLink>
                </li>
                <li>
                    <NavLink to={'proyecto-2'}>Proyecto 2</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path={':proyecto_id'} element={<Proyecto></Proyecto>} />
            </Routes>

        </div>


    )
}

function App() {

    let activeStyle = {
        textDecoration: "none",
    };



    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } to="/portafolio/" >Portafolio</NavLink>
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
