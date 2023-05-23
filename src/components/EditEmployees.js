import { Component } from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditEmployees=()=>{
    let baseURL = " http://localhost:4000/api";
    
    const history = useHistory();
    const {id} = useParams();

    const onSubmitHandler= (e)=>{
        e.preventDefault();
        
        let firstname = e.target.firstname.value;
        let lastname = e.target.lastname.value;
        let department=e.target.department.value;
      
        console.log(e.target.firstname.value);
      
        (async ()=> { axios.put(`${baseURL}/employees/${id}`,{firstname,lastname,department})})()
        .then(()=>history.push("/employees/"));  
        }
  
        return (
            <>
            <form className="Add" onSubmit={onSubmitHandler}>
            <label >First Name : </label>
            <input type="text" name="firstname"  required></input><br />
            <label >Last Name : </label>
            <input type="text" name="lastname"  required></input><br />
            <label >Department :</label>
            <input type="text" name="department" required></input> <br />
            {/* <Link to ="/employees"><input type ="submit"></input></Link> */}
            <div><input className ="Btnsub" type ="submit"></input></div>
            </form>
            <Link to ={`/employees/${id}`} style = {{textDecoration: 'none',color:'black'}}><div className="linkinner">Back</div>
              </Link></>
              
        )
    
};
export default EditEmployees;