
import { createContext,useReducer } from "react";
import appReducer from './AppReducer'
import{v4} from 'uuid'


const initialState={
  tasks:[ {
    id: "1",
    title: "some title",
    description: "some description",
    done: false,
  },
  {
    id: "2",
    title: "some title",
    description: "some description",
    done: false,
  },],
}

export const GlobalContext = createContext(
initialState);

//componente Padre (donde contiene los componentes hijos como TaskList,TaskForm,App..y todos los componentes que querramos envolver en App)

export const ContextProvider = ({children})=>{
 //useReducer
 const[state,dispatch] = useReducer(appReducer,initialState)


  //funcion que añade una tarea
  const addTask =(task)=>{
 
  dispatch({type:"ADD_TASK", payload:{...task, id: v4(), done:false}})
 }
 //funcion que borra tarea
 const deleteTask =(id) =>{
    dispatch({type:"DELETE_TASK",payload: id})
 }
 //funcion que edita tarea
 const updateTask = (task)=>{
     dispatch({type:"UPDATE_TASK",payload: task})
};
// funcion Done
const toggleTaskDone = (id)=>{
  dispatch({type:"TOGGLE_TASK_DONE", payload:id})
}

 return (
  <GlobalContext.Provider value={{...state,addTask,deleteTask,updateTask,toggleTaskDone}}>
    {children}
    </GlobalContext.Provider>
 )

}