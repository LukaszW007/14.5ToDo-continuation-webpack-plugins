import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import Todo from '../components/Todo.js';

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
            input:'',
            showModal: false
        };
    }
    triggerShowModal(text) {
        console.log('text to show', text)
        this.setState({
            showModal: true,
            text
        })
    }
    inputChange(event){
        const inputValue = event.target.value;
        console.log(inputValue)
        this.setState({input:inputValue});
}
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data})
    }
    removeTodo(id){
        const reminder = this.state.data.filter(todo => todo.id !==id);
        this.setState({data: reminder});
    }
    render(){
        return(
            <div className={style.TodoApp}>
                <input type="text" value={this.state.input} onChange={event => this.inputChange(event)}/>
                <button
                    className={'addItem'}
                    onClick={()=>this.addTodo(this.state.input)}
                >Add item</button>
                <Title itemsNumber={this.state.data.length}/>
                <TodoList data={this.state.data} triggerModal={(text) => this.triggerShowModal(text)} removeTodoItem={id => this.removeTodo(id)}/>
                <Todo showModal={this.state.showModal} taskText={this.state.text} />
            </div>
        );
    }
}

export default App;