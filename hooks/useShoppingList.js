import { useReducer } from "react"

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const CLEAR_TODOS = 'CLEAR_TODOS';

const initialReducer = [
  {id: '1', value: 'sucre'},
  {id: '2', value: 'banane'},
  {id: '3', value: 'steack haché'},
]

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(t => t.id !== action.payload);
    case CLEAR_TODOS:
      return [];
    default:
      throw new Error();
  }
}

const useShoppingList = () => {
  const [todos, dispatch] = useReducer(reducer, initialReducer);

  const addTodo = (todo)  => dispatch({type: ADD_TODO, payload: todo})
  const removeTodo = (id) => dispatch({type: REMOVE_TODO, payload: id})
  const clearTodos = ()   => dispatch({type: CLEAR_TODOS})

  return {
    todos,
    addTodo,
    clearTodos,
    removeTodo
  }
}

export default useShoppingList;