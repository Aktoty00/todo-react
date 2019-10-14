import React, {Component} from 'react';
import './App.css';
import TodoList from './TodoList'

class App extends Component{

  state = {
    value: '',
    todos: []
  }
  newElement = todo => {
    this.setState( oldState=>{
      return { todos: [todo, ...oldState.todos] }
    });

    this.setState({value: ''});
  }

  addNewElement =()=> {
    let newTodo = {
      text: this.state.value
    }
    if(newTodo.text!==''){
      this.newElement(newTodo);
      console.log(this.state.todos)
    }
    else
      return 0;
  }
  handleOnChange = e => {
    this.setState({value : e.target.value});
  }
  deleteElement = index =>{
    let array = [...this.state.todos];
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({todos: array});
    }
    console.log('deleted');
  }
  render() {
    const {todos}=this.state;
    return(
        <div className="App__wrapper" >
          <div className="todo-add">
            <p>ToDo List</p>
            <input className="todo-input" value={this.state.value} onChange={this.handleOnChange} type="text" placeholder="   New Task" />
            <button className="todo-add-button" onClick={this.addNewElement}>Add</button>
          </div>
          <div className="todo-list-items">
            <ul className="todo-list-item-ul">
              <li className="todo-list-item-ul-li">
                <div>
                  {
                    todos.map( (t,index) => <TodoList key={index} deleteElement={this.deleteElement} text={t.text}/>)
                  }
                </div>
              </li>
            </ul>
          </div>
        </div>
    );
  }
}

export default App;
