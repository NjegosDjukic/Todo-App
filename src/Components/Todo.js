import React, { useContext, useRef } from 'react';
import { ACTIONS } from '../Context/TodoContext';
import { TodoContext } from '../Context/TodoContext';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import EditIcon from '@material-ui/icons/Edit';

const Todo = ({name, complete , id , index , disabled }) => {
  const { dispatch } = useContext(TodoContext);  
  const handleDelete = () => {
    dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: id 
    })
  }
   const handleComplete = () => {
    const payload = 
    {
      index,
      disabled
     }
    dispatch({
      type: ACTIONS.SET_COMPLETE,
      payload
    }) 
  } 
 
  return (
    <div>
      <div >
        <h3 className='todo-list-text' id={disabled == false  ? 'completed-text' : "normal-text" }  > {name}
          <span>
          <CheckIcon id='delete-complete-icon' className={disabled === false ? 'completed-icon' : "normal-text"} onClick={handleComplete}/>
          <DeleteIcon onClick={handleDelete} id='delete-complete-icon'/>
         
          </span> 
        </h3>
     </div>  
    </div>
  )
}
export default Todo;