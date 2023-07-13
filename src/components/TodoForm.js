import React, { useState } from 'react';
import "./TodoForm.css";
const TodoForm = () => {
    const [inputValue, setInputValue] = useState({
        task: "",
        time:null,
    });
    const [showError, setShowError] = useState(false);
    const [myTodos, setMyTodos] = useState([]);

    const handleChange = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value});
    }

    const handleAddTodo = () => { 
        if(inputValue.task!=="" && inputValue.time!==null){
        setMyTodos([...myTodos, inputValue]);
        setInputValue({...inputValue, task:"" , time:""});
        setShowError(false);
        }
        else{
      setShowError(true);
        }
    } 

    const handleDeleteTodo = (idx) => {
        const newTodosArray = [...myTodos];
        newTodosArray.splice(idx, 1);
        setMyTodos(newTodosArray);
    }
    
    
    return (
        <>
        <div className="TodoForm">
            <input
             type="text" name="task" className="todo-input" placeholder="What is the task today?" 
            onChange={handleChange} value={inputValue.task}/>
            <input
             type="number" name="time" className="todo-input" placeholder="How much time is the task gonna take? (in hours)" 
            onChange={handleChange} value={inputValue.time}/>
            </div>
            <button onClick={handleAddTodo} className="todo-btn">Add Task</button>
            
        <div className="output">
        {showError && <div>Inputs cannot be empty</div>}
        {myTodos.map((todo, idx) => <div className="todoInput">
            {`My task is ${todo.task} and it is gonna take ${todo.time} hours`}
            <button onClick={() => handleDeleteTodo(idx)}>Delete</button>
        </div>)}
        </div>
        </>
    )
}
export default TodoForm;