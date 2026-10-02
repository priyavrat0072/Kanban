import { createContext , useState , useEffect } from "react"

export const TaskContext = createContext();

/* Creating the context provider */
const TaskContextProvider =({children})=>{

    /* Getting the data of saved array from local storage */
    const [tasks , setTasks] = useState(()=>{
        const savedTask = localStorage.getItem("tasks")
        return savedTask ? JSON.parse(savedTask) : []
    })

    /* Setting task data in local storage */
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])

    /* Adding new tasks in the array */
    const addTask = (newTask) =>{
        setTasks((prevTask)=>[...prevTask , newTask])
    }

    /* Deleting task from the array */
    const deleteTask = (taskId) =>{
        setTasks((prevTask)=>{
           return prevTask.filter((task)=>task.id !== taskId)
        })
    }

    /* Updating task from the array based on id */
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