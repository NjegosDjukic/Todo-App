import React, { useContext, useState } from 'react';
import { TodoContext } from '../Context/TodoContext';
import { ACTIONS } from '../Context/TodoContext';
import AddIcon from '@material-ui/icons/Add';

const AddTodo = () => {
    const {todos , dispatch} = useContext(TodoContext);
    const [name, setName] = useState("");
    const complete = false;
    const newLength = todos.length;
  
       const Submit= (e) => 
       {
            e.preventDefault();
            const todo = 
             {
               name,
               complete,
               id : newLength,
               disabled : true      
            }
            dispatch
            ({
               type : ACTIONS.ADD_TODO,
               payload : todo ,
            })
           setName("");   
        }
   return (
       <div>
            <form onSubmit={Submit} className='form'>
                <label htmlFor='name'></label>
                <input type="text" value={name} placeholder='What needs to be done ?' id='name' required onChange={e => setName(e.target.value)} />
                <button type='submit' className='add-button'><AddIcon /> <span>Add</span></button>
            </form>
        </div>
   ) 
}
export default AddTodo;