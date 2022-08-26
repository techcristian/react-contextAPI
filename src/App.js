//importo react-router-dom para renderizar condicionalmente los componentes y no directamente ..con Routes y Route
 import {Routes,Route} from 'react-router-dom';


//importo componentes
import Heading from './components/Heading';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

//componente Padre 
import {ContextProvider} from './context/GlobalState'

import './App.css';



function App() {
  return (
    <div className="h-screen  text-white bg-green-300 p-10">
     
      <div className='container'>
     <ContextProvider>

     <Heading/>
      <Routes>
     
      <Route path="/" element={<TaskList />} exact />
      <Route path="/add" element={<TaskForm/>} />
      <Route path="/edit/:id" element={<TaskForm/>} />

      </Routes>

     </ContextProvider>
      
      

      </div>
    </div>
    
   

  );
}

export default App;
