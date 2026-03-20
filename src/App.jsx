import Addtaskfrom from "./Component/Addtaskfrom";
import Header from "./Component/Header";
import Tasklist from "./Component/Tasklist";
import Taskiteam from "./Component/Taskiteam";
import States from "./Component/States";

import './App.css';
import { useState } from "react";
function App() {

  
    const [tasks,settask]=useState([
      {id:1 ,name:"task1",complete:false,priority: "high"},
    {id:2 ,name:"task2",complete:true,priority: "high"},
    ])

  const addtask = (newtask)=>{
    settask([...tasks,newtask])
  }
  const toggleTask = (taskId)=>{
    settask(tasks.map(task=>
      task.id===taskId?{...task,complete: !task.complete}:task
    ))
  }
  const deleteTask=(taskId)=>{
    settask(tasks.filter(task=>task.id !==taskId))
  }
  
  return (
    <div className="container">
      <Header title="مدير المهام" count={tasks.length} />
      <States tasks={tasks} />
      <Addtaskfrom onAdd={addtask} />
      <Tasklist tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );

}

export default App
