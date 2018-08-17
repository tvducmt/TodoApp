import React ,  { Component } from 'react';
 import Todo from '../todo/Todo'
 import firebase from '../../firebase';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {}};
    this.changeState = this.changeState.bind(this)
  }
  changeState(id, data){
    var dataPath = id+"/data";
    firebase.database().ref('task').update({ [dataPath]:data})
  }

  deleteTask(value) {
     firebase.database().ref('task').orderByChild("status").on('value', (data) => { 
        data.forEach(function(data) {
            if (data.val().data === value) {
                data.ref.remove();
                return;
            }
         });
    });
  }
  updateStatusTask(id) {
   firebase.database().ref('task').update({ [id]:"finish"})
  }
  
  componentDidMount() {
    this.firebaseRef = firebase.database().ref().child('/task');
    this.firebaseCallback = this.firebaseRef.on('value', (snap) => {
      console.log('snap', snap.val())
      this.setState({ data: snap.val() });
    });
    
  }

  componentWillUnmount() {
    // Un-register the listener on '/someData'.
    this.firebaseRef.off('value', this.firebaseCallback);
  }

  render(){
    var target = this.state.data;
    const arr= [];
    
    if (this.state.data === null) {
      return (<ul></ul>);
    } 

    for (var k in target){
      if (target.hasOwnProperty(k)) {
        var innerObj = {};
        innerObj.id = k
        innerObj.value = target[k];
        arr.push(innerObj);
      }
    }
    const todoNode = arr.map((todo) => {
        return (<Todo key = {todo.id}  edit = {todo.value.edit} id = {todo.id} status = {todo.value.status} todo = {todo.value.data} deleteTask = { () => this.deleteTask(todo.value.data)} 
         updateStatusTask = { () => this.updateStatusTask(todo.id+"/status")}
         handleInputChange={this.handleInputChange} changeState = {this.changeState}/>) 
    });
    return (<ul>{todoNode}</ul>);
  }
}