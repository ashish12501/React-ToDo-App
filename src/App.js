import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputList, setinputList] = useState([]);
  const [newtask, setTask] = useState("");
  const sendTask = (event) => {
    setTask(event.target.value);
  }

  const sendList = () => {
    const task = {
      id: inputList.length === 0 ? 1 : inputList[inputList.length - 1].id + 1,
      Taskname: newtask,
      status: false
    }
    setinputList([...inputList, task])

  }

  const deleteTask = (id) => {
    setinputList(inputList.filter((task) => { return task.id !== id; }))
  }

  const taskCompleted = (id) => {
    setinputList(inputList.map((task) => {
      if (task.id === id) { return { ...task, status: true } }
      else { return task }
    }))
  }
  return (
    <div className="App">
      <h2>React-ToDo-List</h2>
      <div className='addTask'>
        <input className='inputTask' onChange={sendTask} placeholder={"Enter Task"} />

        <button className='button1' onClick={sendList}>Add Task</button>
      </div>

      <div className='list'>
        {inputList.map((newtask) => {
          return (
            <div style={{ backgroundColor: newtask.status === true && "rgb(155, 245, 155)" }} className='taskNbutton'>
              <h3 className='displaytxt' >{newtask.Taskname}</h3>
              <button className='button3' onClick={() => taskCompleted(newtask.id)} >Completed</button>
              <button className='button2' onClick={() => deleteTask(newtask.id)}>X</button>
            </div>
          )
        })}
      </div>

    </div >
  );
}


export default App;
