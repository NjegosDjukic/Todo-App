import './App.css';
import { TodoProvider } from './Context/TodoContext';

function App() {

  return (
    <div className="App">
       <div className='title-div'><span className='title'>Todo-List</span></div>
      <TodoProvider>
      </TodoProvider>
    </div>
  );
}
export default App;
