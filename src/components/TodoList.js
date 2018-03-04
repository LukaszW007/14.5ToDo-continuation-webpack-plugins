import React from 'react';
import styleList from  './TodoList.css';

class TodoList extends React.Component {
    constructor (props) {
        super(props);
        /*this.state = {
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
        }*/
    }

    removeItem (itemId) {
    }

    render () {
        const items = this.props.data.map(function (Todo) {
            return (
                <li className={styleList.listItem} >
                    <p className={styleList.id} >{Todo.id}. </p>
                    <p className={styleList.text} >{Todo.text}</p>
                    <button
                        className={styleList.button}
                        //onClick={this.removeItem(Todo.id)}
                    >x</button>

                </li>
            )
        });
        return (
            <ul className = {styleList.todoList}>{items}</ul>
        )

    }
}

export default TodoList;