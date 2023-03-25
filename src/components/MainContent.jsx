import React, { useState } from 'react'
import { TodoForm } from './TodoForm';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm'
import { FooterLinks } from './FooterLinks';

export const MainContent = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo =>{
        setTodos([...todos,{
            id: uuidv4(),
            task: todo,
            isComplete : false,
            isEditing : false
        } ]);
        console.log(todos)
    }

    const completeTodo = id => {
        setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        ));
     }; 

     const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing : !todo.isEditing} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id ))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing : !todo.isEditing} : todo))
    }
  return (
    <Container fluid="md">
        <Card className="p-3 m-3" >
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
                todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo}/>
            ) : (
                <Todo task={todo} key={index} completeTodo={() => completeTodo(todo.id)} deleteTodo={deleteTodo} editTodo={editTodo}/>
            )))}
            <FooterLinks />
        </Card>
    </Container>
  )
}
