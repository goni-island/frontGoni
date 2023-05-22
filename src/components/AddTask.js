import { Component } from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link, Navigate,NavLink,useNavigate,useHistory,withRouter} from "react-router-dom";

const AddEmployee=()=>{
    let baseURL = " http://localhost:4000/api";
   
    const history = useHistory();
    const [data,setData] =useState({
        employee: '',
        description : '',
        prioritylevel: null,
        completion : ''
    })
   
    const onSubmitHandler= (e)=>{
        e.preventDefault();
        
        let name = e.target.employee.value;
        let descrip = e.target.description.value;
        let priority=e.target.priority.value;
        let comp = e.target.completion.value;
    

        (async ()=> { axios.post(`${baseURL}/tasks/`,{
            employee : name,
            description : descrip,
            prioritylevel: priority,
            completion: comp,
            employeeId: e.target.employee.value
        })})()
        .then(()=>history.push("/tasks"));  
        }

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

        return (
        <form className="Add" onSubmit={onSubmitHandler}>
        
          <label >Assigned USER  </label>
          <select  name="employee" required>
          {employeeList.map((employee)=>(  
          <option key = {employee.id} value ={employee.id}> {employee.firstname} {employee.lastname}</option> ))}
           </select>  <br />

          <label >Description  </label>
          <input type="text" name="description"  required></input><br />
          
          <label >Priority  </label>
          <input type ="radio" id ="priority" name ="priority" value ={1}>
          </input>
          <label> 1</label>
          <input type ="radio"  name ="priority" value ="2">
          </input>
          <label> 2</label>
          <input type ="radio"  name ="priority" value ="3">
          </input>
          <label> 3</label><br />
          
          <label > Completion  </label>
          <select  name="completion" required>
            <option value ="NOT DONE">NOT DONE</option>
            <option value ="NOT DONE">DONE</option>
           </select>
          {/* <Link to ="/employees"><input type ="submit"></input></Link> */}
          <div><input className ="Btnsub" type ="submit"></input></div>
          </form>
           
        )
    
};
export default AddEmployee;