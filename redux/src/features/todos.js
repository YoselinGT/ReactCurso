import {combineReducers} from "redux";
import {makeFetchingReducer,makeSetFilterReducer,reduceReducers,makeCrudReducer,mac,mat,asyncMac} from './utils'

const asyncTodos = mat('todos')

const [setPending,setFulfilled,setError] = asyncMac(asyncTodos)

//export const setPending = mac('todos/pending')
//export const setFulfilled = mac('todos/fulfilled','payload')
//export const setError = mac('todos/error','error')
export const setComplete =  mac('todo/complete','payload')
export const setFilter =  mac('filter/set','payload')

export const fetchThunk = () => async dispatch => {
    dispatch(setPending())
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        const todos = data.slice(0,9)
        //dispatch({type: 'todo/fulfilled',payload: todos})
        console.log(todos)
        dispatch(setFulfilled(todos))
    } catch (e){
        dispatch(setError(e.message))
    }
}

export const filterReducer = makeSetFilterReducer(['filter/set'])

export const fetchingReducer  = makeFetchingReducer(asyncTodos)
const fulfilledReducer = makeSetFilterReducer(['todos/fulfilled'])

const crudReducer = makeCrudReducer(['todo/add','todo/complete'])

export const todosReducer = reduceReducers(crudReducer,fulfilledReducer)

export const reducer = combineReducers({
    todos: combineReducers({
        entities: todosReducer,
        status:fetchingReducer
    }),
    filter: filterReducer,

})

export const selectTodos = (state) => {
    //console.log(state)
    const {todos: {entities}, filter} = state

    if (filter === 'complete') {
        return entities.filter(todo => todo.completed)
    }

    if (filter === 'incomplete') {
        return entities.filter(todo => !todo.completed)
    }

    return entities
}

export const selectStatus = state => state.todos.status