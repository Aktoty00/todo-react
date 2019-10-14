import React, { Component } from 'react';
import './TodoList.css'
import del1 from './images/del1.png'

class TodoList extends Component {
    render() {
        return (
            <div className="todo-element">
                <p>{this.props.text}</p>
                <img className="delete-img" src={del1} alt="delete" onClick={this.props.deleteElement} />
            </div>
        );
    }
}

export default TodoList;
