import {Link} from 'react-router-dom';
const HomeView=()=>{
    return (<>
    <h3>HELLO, FINAL PROJECT!</h3>
           <Link to ={'/employees'}><div className="boxCom">All Employees</div></Link> 
                <Link to ={'/tasks'} ><div className="boxCom">All Tasks</div></Link>
    </>
        );
};
export default HomeView;