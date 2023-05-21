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
      ((async () => {
          axios.get(`${baseURL}/tasks`)
            .then((response) => {
              const data = response.data;
              setTasksList(data);
            })
            .catch((error) => {
              console.log(error);
            });
        })());
    },[]);

    return (<>
        <h3 className = "EmpName" >Tasks list</h3>
        {tasksList.map((tasks)=>(
            <div className = "boxEmp" key={tasks.id}>
            <Link to ={`/tasks/${tasks.id}`}>
                <p>Task : {tasks.task}</p>
            </Link>
            <p>Description : {tasks.description}</p>
            <p>Status : {tasks.status}</p>
            </div>))}
    </>)

}  
export default Tasks;


