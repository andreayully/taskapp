import React, {Component} from 'react'

class TasskForm extends Component{

    state = {
        'title':'',
        'description': ''
    }

    onSubmit = (e) => {
        //console.log("Submiting...")
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }

    onChange  = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input 
                type="text"
                name="title" 
                placeholder="Write a task" 
                onChange={this.onChange} 
                value={this.state.title}></input>
                <br/>
                <br/>
                <textarea 
                placeholder="Write a description"
                name="description" 
                onChange={this.onChange} 
                value={this.state.description}></textarea>
                <input type="submit"></input>
            </form>
        )
    }



}

export default TasskForm;