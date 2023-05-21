import { Component } from "react";

class EditTasks extends Component{
    render(){
        return (
            <div className ="add">

                <b3>Add Tasks</b3>
                <form>
                    <div className="input">
                    <label>task</label>
                    <input type = "text" name ="task" placeholder ="task"/>
                    </div>
                    <div className="input">
                    <label>task</label>
                    <input type = "text" name ="task" placeholder ="task"/>
                    </div>
                    <input type="submit">Submit</input>
                </form>
            </div>
        )
    }
};
export default EditTasks;