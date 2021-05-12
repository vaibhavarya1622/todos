import React from "react"
import axios from 'axios'
class AddTask extends React.Component{
    constructor(){
        super();
        this.state={
            task:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            task:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        const task={
            task:this.state.task
        }
        console.log(task)
        axios.post('http://localhost:5000/task/add',task)
        .then(response=>console.log(response.data))
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add New Task here:</label>
                        <input type="text" required value={this.state.task} className="form-control"
                        onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Task" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddTask