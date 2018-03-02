import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id){
        const remainder = this.state.data.filter(todo => todo.id !==id);
        this.setState({data: reminder});
    }
    render(){
        return(
            <div className={style.TodoApp}>
                <Title numberOfItems={this.props.numberOfItems}/>
                <TodoList/>
            </div>
        );
    }
}

export default App;