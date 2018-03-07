import React from 'react';
import styleList from './TodoList.css';

class TodoList extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            taskText: ''
        }
    }

    nameTask (text) {
        this.setState({taskText: text}, function() {
            this.props.triggerModal(this.state.taskText)
        });
    }


    render () {
        const items = this.props.data.map((Todo) =>
            <li key={Todo.id} className={styleList.listItem}>
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