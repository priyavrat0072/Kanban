import { useContext, useState } from "react"
import { TaskContext } from "./context/TaskContext"
import TaskModel from "./TaskModal"
import TaskDetailModel from "./TaskDetailModel"


const Task =({task})=>{
    // console.log(task)
    const {deleteTask} = useContext(TaskContext)
    const [isEditable , setIsEditable] = useState(false)
    const [isDetialsOpen , setIsDetialsOpen] = useState(false)

    return(
        <div className="bg-white border rounded p-4 m-3 shadow" onClick={()=>setIsDetialsOpen(true)}>
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{task.description}</p>
            <p className="text-sm mt-3">Priority <span className="font-semibold">{task.priority}</span></p>
            <div className="flex gap-2 mt-4">
                <button className="border px-3 py-1" onClick={(e)=>{e.stopPropagation(), setIsEditable(true)}}>Edit</button>
                <button className="border px-3 py-1" onClick={(e)=>{e.stopPropagation(),deleteTask(task.id)}}>Delete</button>
            </div>
            {
                isEditable && (
                    <TaskModel task={task} onClose={()=>setIsEditable(false)} />
                )
            }
            {
                isDetialsOpen && (
                    <TaskDetailModel task={task} onClose={()=>setIsDetialsOpen(false)}/>
                )
            }
        </div>
    )
}
export default Task