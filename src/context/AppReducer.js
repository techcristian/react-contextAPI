import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";

export default function AppReducer(state,action) {
switch (action.type) {

  case "ADD_TASK":
    return {tasks:[...state.tasks,action.payload]
    };
    case "DELETE_TASK":
      console.log(state)
      console.log(action.payload)
    return {
      ...state,
      tasks: state.tasks.filter(task => task.id !== action.payload)
    };
    case "UPDATE_TASK":
      const updateTask = action.payload

      const updateTasks =state.tasks.map(
        (task)=>{
          if (task.id=== updateTask.id){
            task.title= updateTask.title
            task.description= updateTask.description
          }
          return task
        }
      );
      return{
        tasks: updateTasks
      };
      case "TOGGLE_TASK_DONE" :
        console.log(action.payload)
      return {
        tasks: state.tasks.map((task)=>
        task.id === action.payload ?
         {...task, done : !task.done}:task
        )
      }
      default:
      return state;
}
 }