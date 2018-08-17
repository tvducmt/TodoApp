import React ,  { Component } from 'react';
import  './Todo.css';

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {edit : false};

        this.handleInputChange = this.handleInputChange.bind(this);
    }
   _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setState({edit:false})
        console.log('do validated');
        }
    }

   handleInputChange(id, value) {
       this.props.changeState(id, value)
    }

    render(){      
        var imageCheck ;
        var inputType="hidden";
        if (this.props.status==="finish"){
            imageCheck = "glyphicon glyphicon-ok";
             
         }else {
            imageCheck = "glyphicon glyphicon-repeat";
         }
        if (this.state.edit) {
            inputType= "text"
        }else {
            inputType="hidden"
        }
        console.log(this.props)
        return (
            <li>
                <div className="content-left">
                        <input type={inputType} value={this.props.todo} className="form-control" onKeyPress={this._handleKeyPress} placeholder="edit" 
                        onChange={(e) => this.handleInputChange(this.props.id, e.target.value)}  />
                        { this.state.edit ? '' : this.props.todo}
                </div> 
                <div className="content-right">
                        <button type="button" className="btn btn-default icon" aria-label="Left Align" onClick={() => this.setState({edit: true})}>
                        <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        </button>
                        
                        <button type="button"  className="btn btn-default icon" aria-label="Left Align"  onClick={() => this.props.updateStatusTask()}>
                                <span className= {imageCheck} aria-hidden="true"></span>
                        </button>
                        <button type="button" className="btn btn-default icon delete" aria-label="Left Align"  onClick={() => this.props.deleteTask()}>
                                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                        </button>
                </div>
            </li>
            
        )
    }
}