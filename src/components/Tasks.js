import { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import { fetchAllTasks } from "../redux/action/action";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Tasks = (props)=>{

    let baseURL = " http://localhost:4000/api";
    const [tasksList,setTasksList] = useState([]);  
  
  
    useEffect(()=>{
      fetchTaskList();
    },[]);               
  
    function fetchTaskList(){
      ((async () => {
        axios.get(`${baseURL}/tasks`)
          .then((response) => {
            const data = response.data;
            setTasksList(data);
            console.log(tasksList)
          })
          .catch((error) => {
            console.log(error);
          });
      })());
    }

    function deleteTask(e){
      e.preventDefault();
      console.log(e.target.value);
      (async () => {
          axios.delete(`${baseURL}/tasks/`+ e.target.value);
      })();
      fetchTaskList();
  }


    return (<>
    <div className = "headList"><h3 >Tasks list</h3></div>
    <div className = "boxEmp">
      <table className ="tbData">
        <thead className = "EmpName"> 
        <tr className ="headTb">
          <th>Assigned USER</th>
          <th>Priority</th>
          <th>Description</th>
          <th>Completion</th>
          <th>Details</th>
        </tr>
        </thead>
      <tbody >
      {tasksList.map((tasks)=>(
        <tr key ={tasks.id}>
          <th >{tasks.employee.firstname} {tasks.employee.lastname}</th>
          <th> {tasks.prioritylevel}</th>
          <th> {tasks.description}</th>
          <th>{tasks.completion}</th>
        <th>
          <div>
            <Link to ={`/tasks/${tasks.id}`}><button className = "BtnBox">Details</button></Link>
            <button className = "BtnBox" value={tasks.id} onClick={deleteTask}>X</button>
          </div>
        </th>
        </tr>
        ))}
       </tbody>
        <tfoot> 
          <tr ><th colSpan ="5"> <Link to="/addtasks"><div><button className="btnAdd">ADD NEW TASK</button></div></Link></th></tr>
          </tfoot>
          </table>
        </div>
    </>)

}  
export default Tasks;


