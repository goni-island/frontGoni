import { fetchAllEmployees, fetchAllTasks } from "./action/action";
import axios from "axios";

let baseURL = 'http://localhost:4000/api';

export const fetchAllEmployeesThunk = ()=>{
    return async (dispatch) =>{
        axios.get(`${baseURL}/employees`)
        .then (res => {const employeeList= res.data;
        // console.log('here');
        // console.log(res.data);
        dispatch(fetchAllEmployees(employeeList));
        }).catch(err=>
            console.error(err))}
        }


export const fetchAllTasksThunk=() =>{
    return async (dispatch)=>{
    axios.get(`${baseURL}/tasks`)
    .then(res => {const tasksList = res.data; 
    dispatch(fetchAllTasks(res.data));
    }).catch(err=>console.error(err))}
    }