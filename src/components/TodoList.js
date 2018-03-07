import React from 'react';
import styleList from './TodoList.css';
import Todo from '../components/Todo.js';

class TodoList extends React.Component {
    constructor (props) {
        super(props);


        this.state = {
            taskText: ''
        }
    }

    nameTask (text) {
        this.setState({taskText: text});
        console.log(this.state.taskText);
    }


    render () {
        const items = this.props.data.map(Todo =>
            <li className = {styleList.listItem}>
                <div className = {styleList.itemContainer} onClick = {() => this.nameTask(Todo.text)}>
                    <p className = 'text'>{Todo.text}</p>
                </div>
                <button
                    className = {styleList.button}
                    onClick = {() => this.props.removeTodoItem(Todo.id)}
                >x
                </button>
            </li>
        );
        return (
            <ul className = {styleList.todoList}>{items}</ul>
        )

    }
}

export default TodoList;