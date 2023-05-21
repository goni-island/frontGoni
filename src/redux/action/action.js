// import {FETCH_ALL_EMPLOYEES,FETCH_ALL_TASKS,DELETE_TASKS,ADD_EMPLOYEES} from './actiontypes';
import * as actiontype from './actiontypes';
// 변수로 확인하기 위함


export const fetchAllTasks=(tasks)=>{
    return {
       type:actiontype.FETCH_ALL_TASKS,
       payload: tasks,
       
    }
};
// export const deleteTasks=()=>{
//     return {
//        type:actiontype.DELETE_TASKS,
//     }
// };
// export const addEmployees=()=>{
//     return {
//        typeactiontype.ADD_EMPLOYEES,
//     }
// };
export const fetchAllEmployees=(employees)=>{
    return {
       type:actiontype.FETCH_ALL_EMPLOYEES,
       payload:employees,
    };
};