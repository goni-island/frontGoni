import {Link} from 'react-router-dom';
const HomeView=()=>{
    return (<>
    <h3>HELLO, FINAL PROJECT!</h3>
    <div className="boxCom" >
           <Link to ={'/employees'} style = {{textDecoration: 'none',color:'white'}} ><div className="link" >All Employees</div></Link> 
                <Link to ={'/tasks'} style = {{textDecoration: 'none',color:'white'}}><div className="link" >All Tasks</div></Link>
    </div>
    </>
        );
};
export default HomeView;