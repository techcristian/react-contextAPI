import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Heading = ()=> {
  return(
    <div>
      <div className='bg-green-400'>
      <div className="flex item-center mb-10 ">
        <Link to="/">
          <h1 className="text-white font-bold "><HomeIcon className='text-white'/></h1>
        </Link>
       
        
      <div className="flex-grow text-right px-4 py-2 m-2">
       <Link to="/add">
       <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
       <AddCircleOutlineIcon /> 
        Add New Task
        </button>
       </Link>
    
       
      </div>
      </div>

      </div>
     

    </div>
  )
};
 export default Heading; 