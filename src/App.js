import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import TodosList from "./components/todosList.component"
import DoneList from "./components/doneList.component"
import AddTask from "./components/addTask.component"

class App extends React.Component{
  render(){
    return(
      <Router>
      <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={TodosList} />
          <Route path="/done" component={DoneList} />
          <Route path="/add" component={AddTask} />
      </div>
      </Router>
    )
  }
}

export default App;
