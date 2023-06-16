import React, {useState} from "react";
import "./App.css";
import Task from "./Components/Task";

function App() {
  
const [taskname, setTaskname] = useState("");
const [time, setTime] = useState("");
const [tasklist, setTlist] = useState([]);

const addTask = () => {
  setTlist([...tasklist, {task: taskname, time: time}]);
  setTaskname("");
  setTime("");
}

  return (
  <div className="App">
    <h1>Todo List</h1>
    <label>Things to do</label>
    <input 
      type="text" placeholder="task" id="task"
      onChange={(e) => {
        setTaskname(e.target.value);
      }}
    />
    <label>Time Limit</label>
    <input type="text" placeholder="time" id="time"
    onChange={(e) => {
      setTime(e.target.value);
    }}
    />
    <button onClick={addTask}>Add</button>

    {tasklist.map((task) => {
      return <Task task={task.task} time={task.time} />
    })}

    {/* <Task task="Do homework" time="1 hour" /> */}
   </div>
  );
}

export default App;