import PropType from "prop-types";
import { Link } from "react-router-dom";
import '../../App.css';
import axios from "axios";
import { useState,useEffect } from "react";

const EmployeesView =(props)=>{
    let baseURL = " http://localhost:4000/api";
    const data = props.EmployeeList;
        console.log(data)
        console.log(props.EmployeeList)

    const[delEmp,setDelEmp] =useState(false);
    // const[employeeList,setEmployeeList]=useState([]);

    function deleteEmp(e){
            e.preventDefault();
            console.log(e.target.value);
            (async () => {
                axios.delete(`${baseURL}/employees/`+ e.target.value);
            })();
            setDelEmp(true);
        }

        

return (<>
    <h3 className = "EmpName" >Employee list</h3>
    {props.EmployeeList.map((employee)=>(
        <div className = "boxEmp" key={employee.id}>
            
        <Link to ={`/employee/${employee.id}`}>
            <div>Name : {employee.firstname} {employee.lastname}
            <button value={employee.id} onClick={deleteEmp}>X</button>
            </div>
        </Link>
        <div>Department : {employee.department}</div>
        </div>))}
        <form><button>Add Employee</button></form></>)
};

EmployeesView.PropType={
    EmployeeList:PropType.array.isRequired,
}
export default EmployeesView;