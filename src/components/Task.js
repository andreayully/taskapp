import React, { Component } from "react";
import propTypes from 'prop-types';

class Task extends Component{

    StyleCompleted(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through':'none'
        }
    }

    render(){
        // propiedad de Task
        const {task} = this.props;

        return(
            <p style={this.StyleCompleted()}>
            {task.id} -
            {task.title} - 
            {task.description} - 
            {task.done}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}></input>
            <button style={btnDelete} 
                onClick={this.props.deleteTask.bind(this, task.id)}>
                X
            </button>
            </p>
        )
    }
}

Task.propTypes = {
    task: propTypes.object.isRequired
}

const btnDelete ={
    fontSize: "18px",
    background: "#ea2027",
    color: "#ffff",
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;
