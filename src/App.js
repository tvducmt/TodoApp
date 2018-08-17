import React, { Component } from 'react';

import './App.css';
import TodoList from './components/todolist/TodoList'
import TodoForm from './components/todoform/TodoForm'
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className ="container"> 
        <h1>ToDo App</h1>
            <TodoForm></TodoForm>
            <TodoList />
        </div>
     </div>
    );
  }
}

export default App;
