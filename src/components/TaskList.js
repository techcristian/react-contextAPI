import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import {Link} from 'react-router-dom'

const TaskList =() =>{
  const {tasks,deleteTask,toggleTaskDone}=useContext(GlobalContext);
  console.log(tasks)
  return(
    <div className="flex justify-center">
      <div className='w-6/12'>
      {tasks.map((task)=>(
         <div className="bg-gray-700 px-20 text-white shadow-2xl mb-4 flex justify-between" key={task.id}>
          <div>
          <h6>{task.id}</h6>
          <h1>{task.title}</h1>
          <h1>{task.description}</h1>
          <button className='bg-purple-600 hover:bg-purple:500 py-2 px-4 mt-2 mb-2' onClick={()=>toggleTaskDone(task.id)}>
            {task.done ? "undone": "done"}

          </button>
          </div>
          <div>
            <button className='bg-red-600 hover:bg-red-500 py-2 px-4 mr-2 mt-4' onClick={()=>deleteTask(task.id)}>delete</button>
            <Link to={`/edit/${task.id}`}>
            <button className='bg-green-600 hover:bg-green-500 py-2 px-4 mr-2 mt-4'>edit</button>
            </Link>
           
          </div>
         </div>
      ))}
      </div>
    </div>
  )
};

export default TaskList