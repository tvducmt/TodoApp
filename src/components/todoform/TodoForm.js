import React, { Component } from 'react';
import firebase from '../../firebase';

// function addTodo(value){
//     alert("hello"+ value);
// }

export default class TodoForm extends Component {

    onSubmit( value) {
        firebase.database().ref('/task').push({status : "doing", data : value, edit: false});
    }
    render(){
        let input;
        return (
            <div>
                 <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Add task"ref = { node => {input = node}} />
                        <div className="input-group-btn">
                        <button className="btn btn-default"  onClick= { ()=> {
                    this.onSubmit(input.value);
                    input.value='';
                }}>
                            <i className="glyphicon glyphicon-plus"></i>Add task
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}   