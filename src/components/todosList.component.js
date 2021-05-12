import React,{Component} from "react"
import "../styles/todolist.css"
import "../styles/todoitem.css"

import axios from 'axios'
const TodoItem=(props)=>(
    <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={props.item.completed}
                    onChange={() => props.handleChange(props.item._id)}
                />
                <p>{props.item.task}</p>
                <button type="button" className="btn btn-primary" onClick={()=>props.deleteTask(props.item._id)}>delete</button>
    </div>
)
export default class todosList extends Component {
    constructor() {
        super()
        this.state = {
            todos:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.deleteTask=this.deleteTask.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:5000/task/')
          .then(response=>{
             if(response.data.length>0){
               this.setState({
               todos:response.data.filter(task=>task.completed===false)
            })
        }
      })
    }
    handleChange(id) {  
        axios.post('http://localhost:5000/task/update/'+id)
        .then(res=>console.log(res))
        .catch(err=>console.log('Error: '+err))   
        
        this.setState({
            todos:this.state.todos.filter(task=>task._id!==id)
        })
    }
    deleteTask(id){
        axios.delete('http://localhost:5000/task/'+id)
        .then(res=>console.log(res))
        .catch(err=>console.log('Error: '+err))

        this.setState({
            todos:this.state.todos.filter(task=>task._id!==id)
        })
    }
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item._id} item={item} handleChange={this.handleChange} 
        deleteTask={this.deleteTask} />)      
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}
