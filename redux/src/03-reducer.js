import {useState} from 'react'
import {useDispatch,useSelector} from "react-redux";

const initialState = {
    entities: [],
    filter: 'all' //complete, incomplete
}

export const reducer = (state = initialState,action) => {
    console.log(state)
    switch (action.type){
        case 'todo/add':{
            //console.log('reducer')
            return {
                ...state,
                entities: state.entities.concat({...action.payload})
            }
        }
        case 'todo/complete':{
            const newTodos = state.entities.map(todo => {
                if(todo.id === action.payload.id){
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })

            return {...state, entities: newTodos}
        }
        case 'filter/set':{
            return {
                ...state,
                filter: action.payload,
            }
        }
    }
    return state
}

const selectTodos = ( state ) => {
    const {entities, filter} = state
    if(filter === 'complete'){
        return entities.filter(todo => todo.completed)
    }

    if(filter === 'incomplete'){
        return entities.filter(todo => !todo.completed)
    }

    return  entities
}

const TodoItem = ({todo}) => {
    const distpatch = useDispatch()
    return  <li style={{textDecoration:todo.completed ? 'line-through' : null}} onClick={() => distpatch({type:'todo/complete',payload:todo})}>{todo.title}</li>
}


function App() {
    const [value,setValue] = useState("")
    const  dispatch = useDispatch()
    //Funcion de tipo identidad: recibe un argumento y devuleve el mismo argumento
    //useSelector sirve para seleccionar partes de nuestro estado
    //Con esta función estamos regresando el estado completo
    //const  state = useSelector(x => x)
    //Ahora con filter devoremos las tareas que se nos especifiquen
    const  todos = useSelector(selectTodos)
    //console.log({state})
    //console.log(state,'rendering')

    const submit = e => {
        e.preventDefault()
        if(!value.trim()){
            return
        }
        const id = Math.random().toString(36)
        const todo = {title: value, completed: false, id}
        dispatch({type: 'todo/add', payload: todo})
        setValue('')
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input value={value} onChange={e=> setValue(e.target.value)}/>
            </form>
            <button onClick={() => dispatch({type: 'filter/set',payload: 'all'})}>Mostrar todos</button>
            <button onClick={() => dispatch({type: 'filter/set',payload: 'complete'})}>Completados</button>
            <button onClick={() => dispatch({type: 'filter/set',payload: 'incomplete'})}>Incompletados</button>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
        </div>
    );
}

export default App;