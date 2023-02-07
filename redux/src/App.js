import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setComplete, setFilter, fetchThunk,selectTodos, selectStatus} from './features/todos'


const TodoItem = ({todo}) => {
    //console.log(todo)
    const distpatch = useDispatch()
    return <li style={{textDecoration: todo.completed ? 'line-through' : null}}
               //onClick={() => distpatch({type: 'todo/complete', payload: todo})}>{todo.title}</li>
               onClick={() => distpatch(setComplete(todo))}>{todo.title}</li>
}


function App() {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    //Funcion de tipo identidad: recibe un argumento y devuleve el mismo argumento
    //useSelector sirve para seleccionar partes de nuestro estado
    //Con esta función estamos regresando el estado completo
    //const  state = useSelector(x => x)
    //Ahora con filter devoremos las tareas que se nos especifiquen
    const todos = useSelector(selectTodos)
    const status = useSelector(selectStatus)
    //console.log({state})
    //console.log(state,'rendering')

    const submit = e => {
        e.preventDefault()
        if (!value.trim()) {
            return
        }
        const id = Math.random().toString(36)
        const todo = {title: value, completed: false, id}
        dispatch({type: 'todo/add', payload: todo})
        setValue('')
    }

    if(status.loading === "pending"){
        return <p>Cargando ...</p>
    }
    if(status.loading === "rejected"){
        return <p>{status.error}</p>
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input value={value} onChange={e => setValue(e.target.value)}/>
            </form>
            <button onClick={() => dispatch(setFilter('all'))}>Mostrar todos</button>
            <button onClick={() => dispatch(setFilter('complete'))}>Completados</button>
            <button onClick={() => dispatch(setFilter('incomplete'))}>Incompletados</button>
            <button onClick={() => dispatch(fetchThunk())}>Fetch</button>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
        </div>
    );
}

export default App;
