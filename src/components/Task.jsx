import { useContext } from "react"
import { TaskContext } from "./context/TaskContext"


const Task =({task})=>{
    // console.log(task)
    const {deleteTask} = useContext(TaskContext)

    return(
        <div className="bg-white border rounded p-4 m-3 shadow">
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{task.description}</p>
            <p className="text-sm mt-3">Priority <span className="font-semibold">{task.priority}</span></p>
            <div className="flex gap-2 mt-4">
                <button className="border px-3 py-1">Edit</button>
                <button className="border px-3 py-1" onClick={()=>deleteTask(task.id)}>Delete</button>
            </div>
        </div>
    )
}
export default Task