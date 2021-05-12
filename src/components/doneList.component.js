import React,{Component} from "react"
import "../styles/todolist.css"
import "../styles/todoitem.css"
import axios from 'axios'
const DoneItem=(props)=>(
    <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={props.item.completed}
                    onChange={() => props.handleChange(props.item._id)}
                />
                {props.item.task}
                <button type="button" className="btn btn-primary" onClick={()=>props.deleteTask(props.item._id)}>delete</button>
    </div>
)
export default class todosList extends Component {
    constructor() {
        super()
        this.state = {
            done:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.deleteTask=this.deleteTask.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:5000/task/')
          .then(response=>{
             if(response.data.length>0){
               this.setState({
               done:response.data.filter(task=>task.completed)
            })
        }
      })
    }
    handleChange(id) {  
        axios.post('http://localhost:5000/task/update/'+id)
        .then(res=>console.log(res))
        .catch(err=>console.log('Error: '+err))   
        
        this.setState({
            done:this.state.done.filter(task=>task._id!==id)
        })
    }
    deleteTask(id){
        axios.delete('http://localhost:5000/task/'+id)
        .then(res=>console.log(res))
        .catch(err=>console.log('Error: '+err))

        this.setState({
            done:this.state.done.filter(task=>task._id!==id)
        })
    }
    render() {
        const doneItems = this.state.done.map((item)=> <DoneItem key={item._id} item={item} handleChange={this.handleChange}
        deleteTask={this.deleteTask}/>)      
        return (
            <div className="todo-list">
                {doneItems}
            </div>
        )    
    }
}
