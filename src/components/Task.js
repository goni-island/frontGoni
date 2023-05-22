import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const Task=()=>{

    const {id} = useParams();
    const [task,setTask]=useState([]);
    let baseURL = " http://localhost:4000/api";
    
      useEffect(()=>{
        fetchTask();
      },[]);               
    
      
      function fetchTask(){
        ((async () => {
          axios.get(`${baseURL}/tasks/${id}`)
            .then((response) => {
              const data = response.data;
              setTask(data);
              console.log({task})
            })
            .catch((error) => {
              console.log(error);
            });
        })());
      }
if(!task.employeeId){
    return <><div></div></>
}
else{
  return (<>

  <div className = "empInfo"><h3 >Task # {task.id} </h3></div>
  <div className ="eachBox">
    <div className="test">
        <div className = "test1"> Assigned USER </div>
        <div className = "test2"> {task.employee.firstname}{task.employee.lastname}</div>
    </div>
    <div className="test">
        <div className = "test1">Priority Level</div>
        <div className = "test2">{task.prioritylevel}</div>
    </div>
    <div className="test">
        <div className = "test1">Description</div>
        <div className = "test2">{task.description}</div>
    </div>
    <div className="test">
        <div className = "test1">Completion</div>
        <div className = "test2">{task.completion} </div>
    </div>
    <div className="test">
     <Link to ={`/edittask/${task.id}`}>
        <div className ="pointer">
     <button className ="buttest" >EDIT TASK</button>
     </div>
     
        </Link>
    </div>
    
    </div>
    


    </>)};

}

export default Task;