import React, { createContext, useReducer} from "react";
import Todos from "../Components/Todos";
import AddTodo from "../Components/AddTodo";

export const ACTIONS = {
    ADD_TODO : 'ADD_TODO',
    DELETE_TODO : 'DELETE_TODO',
    SET_COMPLETE : 'SET_COMPLETE',
    DELETE_COMPLETED : 'DELETE_COMPLETED',
    DELETE_ALL : 'DELETE_ALL'
}
const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.ADD_TODO :
            return {
                ...state,
                todos : [...state.todos , action.payload ] 
            }
        case ACTIONS.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo)=>todo.id !== action.payload)   
                }
        case ACTIONS.SET_COMPLETE :
            const item = state.todos.slice();           
            item[action.payload.index].complete = true;
            item[action.payload.index].disabled = false;   
            return {
                ...state,
                todos : item
                }
        case ACTIONS.DELETE_COMPLETED :
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.complete !== true)    
                }
        case ACTIONS.DELETE_ALL : 
            return {
                todos : state.todos.filter((todo) => todo.id == 33333)
                }          
    }
}
export const initialstate = {
    todos : [
        {name: 'Learn react' , id : 0 ,  complete : false , disabled : true},
        {name: 'Go to shopping' , id :  1, complete : false, disabled : true},
        {name: 'Go to restaurant' , id : 2, complete : false, disabled : true},
        {name: 'Go running' , id :  3, complete : false, disabled : true },
        {name: 'Play CSGO' , id :  4, complete : false, disabled : true},
        {name: 'Play football' , id : 5 , complete : false, disabled : true}
    ]
}
export const TodoContext = createContext()
export const TodoProvider = (props) => {
    const [state , dispatch ] = useReducer(reducer, initialstate)
    return (
        <TodoContext.Provider value={{
            todos : state.todos,
            dispatch
        }}> 
          <div>
            <AddTodo /> 
            <Todos />
            {props.children}
          </div>
        </TodoContext.Provider>
    )
}