import {Link} from 'react-router-dom';
const HomeView=()=>{
    return (<>
           <Link to ={'/employees'}><div className="boxCom">All Employees</div></Link> 
                <Link to ={'/tasks'} ><div className="boxCom">All Tasks</div></Link>
    </>
        );
};
export default HomeView;