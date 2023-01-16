import Hooks from "./Hooks";
import Effect from "./Effect";
import Reducer from "./Reducer";
import Ref from "./Ref"

const MiComponente = ({miProp}) =>{
  return (
      <div>
        Nombre: {miProp}
      </div>
  )
}
const App = () => {
    /*
       <Hooks/>
       <Effect />
       <Reducer/>
    */
  return (
      <div>
      <MiComponente miProp={'chanchito feliz'}/>
      <Ref/>
      </div>
  )
}

export default App
