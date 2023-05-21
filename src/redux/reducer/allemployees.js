import { FETCH_ALL_EMPLOYEES} from "../action/actiontypes.js";


// const initialState={
//     employeeList:[],
// };

// //reducer
// const employeesListReducer = (state = initialState, action)=>{
//     switch(action.type){
//         case FETCH_ALL_EMPLOYEES:
//             return action.payload;
//         default:
//         return state;
// }
// };
const initialState={
   
};

//reducer
const employeesListReducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_ALL_EMPLOYEES:
            return action.payload;
        default:
        return state;
}
};


export default employeesListReducer;
