import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';

class App extends React.Component {
    constructor(props){
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
                }],
            input:''
        };
    }
    inputChange(event){
        const inputValue = event.target.value;
        this.setState({input:inputValue});
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
        const reminder = this.state.data.filter(todo => todo.id !==id);
        this.setState({data: reminder});
    }
    render(){
        return(
            <div className={style.TodoApp}>
                <input type="text" value={this.state.input} onchange={this.inputChange}/>
                <button
                    className={'addItem'}
                    onClick={this.addTodo(this.state.input)}
                >Add item</button>
                <Title numberOfItems={this.props.numberOfItems}/>
                <TodoList data={this.state.data}/>
            </div>
        );
    }
}

export default App;