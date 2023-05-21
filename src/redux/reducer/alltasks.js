import { FETCH_ALL_TASKS,DELETE_TASKS } from "../action/actiontypes.js";


const initialState=[];

const TasksListReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_ALL_TASKS:
            
            return action.payload;
        // case DELETE_TASKS:
        //     return action.payload;
        default:
            return state;
    }
};
export default TasksListReducer;