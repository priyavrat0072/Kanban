import { createContext , useState , useEffect } from "react"

export const TaskContext = createContext();

const TaskContextProvider =({children})=>{

    const [tasks , setTasks] = useState(()=>{
        const savedTask = localStorage.getItem("tasks")
        return savedTask ? JSON.parse(savedTask) : []
    })

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])

    const addTask = (newTask) =>{
        setTasks((prevTask)=>[...prevTask , newTask])
    }

    const deleteTask = (taskId) =>{
        setTasks((prevTask)=>{
           return prevTask.filter((task)=>task.id !== taskId)
        })
    }

    const updateTask =(updatedTask)=>{
        setTasks((prevTask) => {
            return prevTask.map((task) => task.id == updatedTask.id ? updatedTask : task)
        })
    }

    // console.log(`task from taskform: ${JSON.stringify(tasks)}`)

    return(
        <TaskContext.Provider value={{tasks , addTask , deleteTask , updateTask}}>
            {children}
        </TaskContext.Provider>
    )
}
export default TaskContextProvider