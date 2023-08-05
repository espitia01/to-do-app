import "./App.css"
import React, { useState} from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [currentTodo, setCurrentTodo] = useState("")
  const [displayButton, setDisplayButton] = useState(false)

  const addTodo = () => {
    const newTodos = [...todos, {task: currentTodo, completed: false}]
    setTodos(newTodos)
    let inputEl = document.getElementById("input-el")
    inputEl.value = ""
    setDisplayButton(true)
  }

  const completeTask = (taskToComplete) =>{
    setTodos(todos.map((task)=>{
      return task.task == taskToComplete ? {task:taskToComplete, completed:true} : task
    }))
  }

  const deleteTask = (task) => {
    const newTodos = todos.filter((curr_task) => curr_task.task !== task)
    setTodos(newTodos)
  }

  const handleButtonClicked = (event) => {
    if (event.key === "Enter") {
      addTodo()
    }
  }

  return (
    <div className="App">
      <header className="App-header">
            <h1 className="h1">Todo List</h1>
            <div style={{display: "flex", justifyContent:"center"}}>
              <input id = "input-el" onKeyPress={handleButtonClicked} className="input" type="text" placeholder="Enter your task here" onChange={(event)=>{setCurrentTodo(event.target.value)}}/>
              <button className="button" style={{marginLeft:"10px"}} onClick={addTodo}>Add Task</button>
              {displayButton && 
              <div>
              <button className="button" style={{marginLeft:"10px"}} onClick={()=>{setDisplayButton(false); setTodos([])}}>Clear All</button>
              </div>
              }
            </div>
            <hr className="hr"/>
            <div style={{display: "flex", justifyContent:"center"}}>
              <ul>
                {todos.map((todo, key)=>{
                  return (
                  <div  id="task" key={key}>
                    <li>{key + 1 +". " + todo.task}</li>
                      <button id = "completed" onClick={() => {
                        completeTask(todo.task)
                      }}>Complete</button>
                      <button onClick={()=>deleteTask(todo.task)} style={{marginLeft:"10px"}}>X</button>
                      {
                        todo.completed ? <p style={{marginLeft:"10px"}}>Completed</p> : <p style={{marginLeft:"10px"}}>Incomplete</p> 
                      }
                    </div>
                  )
                })}
              </ul>
            </div>
            
      </header>
    </div>
  );
}

export default App;
