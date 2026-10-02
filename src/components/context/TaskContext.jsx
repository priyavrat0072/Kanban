import { createContext , useState } from "react"

export const TaskContext = createContext();

const TaskContextProvider =({children})=>{

    const [tasks , setTasks] = useState([])

    const addTask = (newTask) =>{
        setTasks((prevTask)=>[...prevTask , newTask])
    }

    const deleteTask = (taskId) =>{
        setTasks((prevTask)=>{
           return prevTask.filter((task)=>task.id !== taskId)
        })
    }

    // console.log(`task from taskform: ${JSON.stringify(tasks)}`)

    return(
        <TaskContext.Provider value={{tasks , addTask , deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}
export default TaskContextProvider