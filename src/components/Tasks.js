import React, { Component } from "react";
import Task from './Task'
import propTypes from 'prop-types';

class Tasks extends Component{
    //componenet Tasks recorre tasks
    render(){
        // componente Tasks tiene tasks como propiedad
        const {tasks} = this.props;
        return (
            tasks.map(task => 
            <Task 
                task={task} 
                key={task.id} 
                deleteTask={this.props.deleteTask}
                checkDone={this.props.checkDone}
            />))
    }
}

Tasks.propTypes ={
    tasks: propTypes.array.isRequired
}


export default Tasks
