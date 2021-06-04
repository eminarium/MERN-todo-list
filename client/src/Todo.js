import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';
import ListTodo from './ListTodo';

class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }

    componentDidMont() {
        this.getTodos();
        console.log("This is Todo ComponentDidMount")
    }

    getTodos = () => {
        axios.get('/api/todos')
            .then(res => {
                console.log("Getting todos in Todo.js")
                if (res.data) {
                    this.setState({ todos: res.data })
                }
            })
            .catch(err => console.log(err))
    }

    deleteTodo = (id) => {
        axios.delete(`/api/todos/${id}`)
            .then(res => {
                if (res.data) {
                    this.getTodos()
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        let { todos } = this.state;

        return (
            <div>
                <h1>My Todo List</h1>
                <Input getTodos={this.getTodos} />
                <ListTodo todos={todos} deleteTodo={this.deleteTodo} />
            </div>
        )
    }
}

export default Todo;