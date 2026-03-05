import { useState } from "react"
import AddTask from "./AddTaskForm.jsx"
import TaskCount from "./TaskCount.jsx"
import TaskLists from "./TaskList.jsx"


function TaskManager() {
    let [tasks,setTasks]=useState([])

    //add new task
    const addNewTask=(taskObj)=>{
        setTasks([...tasks,taskObj])
    }
  return (
    <div>
        <h1 className="text-7xl text-blue-300 mb-10 text-center bg-yellow-200 ">Task Manager</h1>
        <div className="flex justify-around bg-yellow-200">
        <AddTask addNewTask={addNewTask}/>
        <TaskLists tasks={tasks} />
        <TaskCount tasks={tasks} />
        </div>
    </div>
  );
}

export default TaskManager