import { Component } from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Employees from "./Employees";
import { Link, Navigate,NavLink,useNavigate,useHistory,withRouter} from "react-router-dom";

const AddEmployee=()=>{
    let baseURL = " http://localhost:4000/api";
    // const navigate = useNavigate();
    const history = useHistory();
    const onSubmitHandler= (e)=>{
        e.preventDefault();
        
        let firstname = e.target.firstname.value;
        let lastname = e.target.lastname.value;
        let department=e.target.department.value;
      
        console.log(e.target.firstname.value);
      
        (async ()=> { axios.post(`${baseURL}/employees/`,{firstname,lastname,department})})()
        .then(()=>history.push("/employees"));  
        }
{/* <Navigate to='/employees'/> */}
// navigate('/employees')
// export 'Navigate' (imported as 'Navigate') was not found in 'react-router-dom' (possible exports: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter

        return (<>
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
           <Link to ={`/employees/`} style = {{textDecoration: 'none',color:'black'}}><div className="linkinner">Back</div>
           </Link></>
        )
    
};
export default AddEmployee;