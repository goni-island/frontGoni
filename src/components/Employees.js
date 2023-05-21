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

const Employees = (props)=>{

  let baseURL = " http://localhost:4000/api";
  const [employeeList,setEmployeeList] = useState([]);  

  useEffect(()=>{
    fetchEmployeesList();
    props.fetchAllEmployees();
  },[]);

  function fetchEmployeesList(){
    ((async () => {
      axios.get(`${baseURL}/employees`)
        .then((response) => {
          const data = response.data;
          setEmployeeList(data);
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

  return (<>
    <h3 className = "EmpName" >Employee list</h3>
    <div className = "boxEmp">
    {employeeList.map((employee)=>(
        <div  className="eachBox" key={employee.id}>
            
        <Link to ={`/employee/${employee.id}`}>
            <div value={employee.id}>Name : {employee.firstname} {employee.lastname}
            <button value={employee.id}onClick={deleteEmp}>X</button>
            </div>
            
        </Link>
        <div>Department : {employee.department}</div>
        </div>))}
        </div>

        <form className="Add" onSubmit={onSubmitHandler}>
          <label >First Name : </label>
          <input type="text" name="firstname"  required></input><br />
          <label >Last Name : </label>
          <input type="text" name="lastname"  required></input><br />
          <label >Department :</label>
          <input type="text" name="department" required></input> <br />
          <input type ="submit"></input>
          </form>
          
          </>)

        
}

 
   //  useEffect(()=>{
    //     props.fetchAllEmployees();
    // },[]);
    // const EmployeeList = useSelector((state)=> state.EmployeeList);
   
//useSelector()는 리덕스 스토어의 데이터를 추출할 수 있으며, 개념적으로 mapStateToProps와 거의 같다.
//connect함수를 이용하지 않고 리덕스의 state를 조회
// /생성한 action을 useDispatch를 통해 발생시킬
  // useEffect(()=>{
  //     props.fetchEmployeesList()
  // },[]) 
  // not working, ,, ,


const mapState =(state)=>{
    return {
        EmployeeList: state.EmployeeList
    };
};
const mapDispatch=(dispatch)=>{
    return {
        fetchAllEmployees: ()=> dispatch(fetchAllEmployeesThunk()),
    };
};

Employees.PropType={
    fetchEmployeesList: PropType.func.isRequired,
    EmployeeList:PropType.array.isRequired,
}

export default connect(mapState, mapDispatch)(Employees);
// export default Employees;