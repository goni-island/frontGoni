import { Component } from "react";
import { connect } from "react-redux";
import { fetchAllEmployeesThunk } from "../redux/thunks";
import PropType from "prop-types";
import { useEffect } from "react";
// import { fetchAllEmployees } from "../redux/action/action";
// import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import EmployeesView from "./view/EmployeesView";
import { useState } from "react";
import { Link } from "react-router-dom";
import EditEmployees from "./EditEmployees";
// import employeesListReducer from "../redux/reducer/allemployees"

const Employees = (props)=>{

  let baseURL = "http://localhost:4000/api";
  const [employeeList,setEmployeeList] = useState([]);  

  useEffect(()=>{
    fetchEmployeesList();
  },[]);               

  function fetchEmployeesList(){
    ((async () => {
      axios.get(`${baseURL}/employees`)
        .then((response) => {
          const data = response.data;
         
          setEmployeeList(data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    })());
  }
  // const[delEmp,setDelEmp] =useState(false);
  // const[employeeList,setEmployeeList]=useState([]);

  function deleteEmp(e){
    e.preventDefault();
    console.log(e.target.value);
    (async () => {
        axios.delete(`${baseURL}/employees/`+ e.target.value);
    })();
    fetchEmployeesList();
}

const onSubmitHandler= (e)=>{
  e.preventDefault();
  let firstname = e.target.firstname.value;
  let lastname = e.target.lastname.value;
  let department=e.target.department.value;

  console.log(e.target.firstname.value);

  (async ()=> { axios.post(`${baseURL}/employees/`,{firstname,lastname,department})})()
  .then(()=>fetchEmployeesList());  
  }

  // if no employee
if(employeeList.length <1){
  return(<> <div className = "headList"><h3 >Employee List</h3></div>
  <div className = "boxEmp"> NONE </div>
   <Link to="/addemployee"><div><button className="btnAdd">ADD NEW EMPLOYEE</button></div></Link>
  </>)
}
else{
  return (<>
    <div className = "headList"><h3 >Employee List</h3></div>
    <div className = "boxEmp">
      <table className ="tbData">
        <thead className = "EmpName"> 
        <tr className ="headTb">
          <th>Name</th>
          <th>Department</th>
          <th>Details</th>
        </tr>
        </thead>
      <tbody >
        {employeeList.map((employee)=>( 
        <tr key ={employee.id}> 
          <th>{employee.firstname} {employee.lastname}</th>
          <th> {employee.department}</th>
        <th>
          <div>
            <Link to ={`/employees/${employee.id}`}><button className = "BtnBox">Details</button></Link>
            <button className = "BtnBox" value={employee.id}onClick={deleteEmp}>X</button>
          </div>
        </th>
        </tr>
        ))}
       </tbody>
        <tfoot> 
          <tr ><th colSpan ="3"> <Link to="/addemployee"><div><button className="btnAdd">ADD NEW EMPLOYEE</button></div></Link></th></tr>
          </tfoot>
          </table>
        </div>
          </>)
}};

export default Employees;
