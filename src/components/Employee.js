import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const Employee=()=>{

const {id} = useParams();

let baseURL = " http://localhost:4000/api";

  useEffect(()=>{
    fetchEmployee();
    fetchTaskList();
  },[]);               

  const [employee,setEmployee]=useState([]);
  const [taskList, setTasksList]=useState([]);
 
function fetchTaskList(){
    ((async () => {
      axios.get(`${baseURL}/tasks`)
        .then((response) => {
          const data = response.data;
          setTasksList(data);
          console.log({data});
        })
        .catch((error) => {
          console.log(error);
        });
    })());
  }
  
  
  function fetchEmployee(){
    ((async () => {
      axios.get(`${baseURL}/employees/${id}`)
        .then((response) => {
          const data = response.data;
          setEmployee(data);
          console.log(employee);
        })
        .catch((error) => {
          console.log(error);
        });
    })());
  }


  return (<>
  <div className = "empInfo"><h3 >Employee # {employee.id} </h3></div>
  <div className ="eachBox">
    <div className="test">
        <div className = "test1"> ID </div>
        <div className = "test2">{employee.id}</div>
    </div>
    <div className="test">
        <div className = "test1">Name</div>
        <div className = "test2">{employee.firstname} {employee.lastname}</div>
    </div>
    <div className="test">
        <div className = "test1">department</div>
        <div className = "test2">{employee.department}</div>
    </div>
    
    <div className="test">
        <div className = "test1">Task</div>
        
        {taskList.map((task)=>(
            task.employeeId === employee.id ? (<div key ={task.id} className = "test2" >{task.description}</div>)
            : <div className = "test2" > NONE </div>
        ))}

    </div>

    <div className="test">
     <Link to ={`/editemployee/${employee.id}`}>
        <div className ="pointer">
     <button className ="buttest" >EDIT EMPLOYEE</button>
     </div>

        </Link>
    </div>
    
    </div>
    </>)};


export default Employee;