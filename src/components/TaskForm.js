import {useState,useContext, useEffect} from 'react';
import { GlobalContext } from "../context/GlobalState"
import {useNavigate,useParams} from 'react-router-dom';

const TaskForm = ()=>{


const { addTask,tasks,updateTask } = useContext(GlobalContext);
 const navigate = useNavigate();
 const params = useParams()//react-router-dom evalua si el navegador trae un parametro

  const [task,setTask] = useState({
    id:"",
    title:"",
    description:"",
  });
 /**
    * Cuando el usuario escribe en el campo de entrada, la función handleChange actualizará el estado de la tarea con
    * el nuevo valor.
    * @param e - el objeto de evento
    */
  const handleChange =(e) => {
    setTask({...task,[e.target.name]: e.target.value})
  }
  //funcion que dispara el formulario
/**
   * Cuando se envía el formulario, evita la acción predeterminada, agrega la tarea y navega a la página de inicio
   * página.
   * @param e - el objeto de evento
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    if(task.id){
      updateTask(task)
    }else {
      addTask(task)
    }
   
    navigate("/")
  }
  //useEffect 
  useEffect(()=>{
    const taskFound = tasks.find(task=> task.id === params.id)
    if (taskFound){
      setTask(taskFound)
    }else{
      console.log("creando")

    }
  },[params.id])


  return (
    <div className="flex justify-center items-center  h-3/4"> 
        <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
          
          <h2 className="text-center mb-7 text-2xl">{
            task.id ? "Editing a task" : "Creating a task"
          }</h2>
           
           <div className="mb-5">
           <input type="text" 
           name="title"
           onChange={handleChange} 
           value={task.title}
           placeholder="Entry Title" 
           className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"/>

          </div>
          <div>
            <textarea 
            name="description"
            rows="3"
            onChange={handleChange}
            value={task.description}
            placeholder="Entry descriptión"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            ></textarea>
          </div>
          <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
          {
            task.id ? "Edit" : "Create"
          }
          </button>

        </form>
    </div>
  )
}
 export default TaskForm