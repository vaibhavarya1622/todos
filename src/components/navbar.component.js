import React,{Component} from 'react'
import {Link} from "react-router-dom"

export default class Navbar extends Component{
    render(){
        return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to="/" className="navbar-brand">MyTodoApp</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link to="/" className="nav-link">My Todo List
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/add" className="nav-link">Add New Task</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/done" className="nav-link">Done!!</Link>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
        )
    }
}