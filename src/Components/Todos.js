import React, { useContext } from 'react';
import Todo from './Todo';
import { ACTIONS , TodoContext } from '../Context/TodoContext';

const Todos = () => {
  const {todos , dispatch } = useContext(TodoContext);

    const deleteCompleted = () => {
    dispatch
    ({
      type : ACTIONS.DELETE_COMPLETED,
    })
  }
  const deleteAll = () => 
  {
    dispatch({
      type : ACTIONS.DELETE_ALL
    })
  } 
  return (
    <div className='wrapper' >
        {todos.map((todo, index) => (
          <div className='list-item'> 
           <Todo name={ todo.name} complete = {todo.complete} id={todo.id} index = {index} disabled = {todo.disabled} />        
          </div> 
          ))}
        <div className={todos.length === 0 ? 'footer-1' : 'footer-2'}>
          <div className='footer-text'>
          {todos.length <=0 ?
            <span className='message'>There are no more todos. Go enjoy !</span> 
        : 
            <span className='counter'>{todos.length} todos left</span>}
          </div>
          <div className='footer-buttons'>
            <button onClick={deleteAll}>Delete all</button>
            <button onClick={deleteCompleted}>Delete completed</button>
          </div>
        </div>
    </div>         
  )
}
export default Todos;