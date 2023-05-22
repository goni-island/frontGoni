import './App.css';
import React from 'react';
import {Tasks,Employees,Home,Employee,EditEmployees,Task,AddTask,EditTasks,AddEmployee} from './components'
import{Switch,Route, BrowserRouter} from "react-router-dom";
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="App-header">
    <Switch>
    <Route exact path ="/" component={Home}/>
    <Route exact path ="/tasks" component={Tasks}/>
    <Route exact path ="/employees" component={Employees}/>
    <Route exact path ="/employees/:id" component={Employee}/> 
    <Route exact path ="/addemployee" component={AddEmployee}/> 
    <Route exact path ="/editemployee/:id" component={EditEmployees}/> 
    <Route exact path ="/edittask/:id" component={EditTasks}/>
    <Route exact path ="/addtasks" component={AddTask}/>
    <Route exact path ="/tasks/:id" component={Task}/>
    </Switch>
    </div>
    </div>
  );
}

export default App;
