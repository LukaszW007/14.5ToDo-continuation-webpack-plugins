import React from 'react';
import styleList from  './TodoList.css';

class TodoList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data:
                [{
                    id: 1,
                    text: 'clean room'
                }, {
                    id: 2,
                    text: 'wash the dishes'
                }, {
                    id: 3,
                    text: 'feed my cat'
                }]
        }
    }

    removeItem () {

    }

    render () {
        const items = this.state.data.map(function (Todo) {
            return (
                <li className={'list-item'} style={styleList.todoList}>
                    <p className={'id'} style={styleList.id}>{Todo.id}</p>
                    <p className={'text'} style={styleList.text}>{Todo.text}</p>
                </li>
            )
        });
        return (
            <ul className = "todoList">{items}</ul>
        )

    }
}

export default TodoList;