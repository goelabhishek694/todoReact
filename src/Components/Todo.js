import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state={
            tasks:[{id:1,txt:"Task 1"},{id:2,txt:"Task 2"},{id:3,txt:"Task 3"}],
            currTask:''
        }
    }

    HandleChange=(e)=>{
        let val=e.target.value;
        this.setState({currTask:val});
    }

    HandleAdd=()=>{
        let ntasks=[...this.state.tasks,{id:this.state.tasks.length+1,txt:this.state.currTask}];
        this.state.currTask='';
        this.setState({tasks:ntasks});
    }

    HandleDelete=(id)=>{
        let ntasks=this.state.tasks.filter( (task)=>{
            return task.id!=id;
        });
        this.setState({tasks:ntasks});
    }


    render() {
        // const tasks=[{id:1,txt:"Task 1"},{id:2,txt:"Task 2"},{id:3,txt:"Task 3"}];
        // console.log(this.state.currTask);
        return (
            <div>
                <div className="input-container">
                    <input value={this.state.currTask} onChange={this.HandleChange} type="text"></input>
                    <button onClick={this.HandleAdd}>Add</button>

                </div>

                <div className="class-list">
                    <ul>
                        {
                            this.state.tasks.map( (task) =>(
                                <li>
                                    <h1>{task.txt}</h1>
                                    <button onClick={()=>{this.HandleDelete(task.id)}}>Delete</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            
            </div>
        )
    }
}
