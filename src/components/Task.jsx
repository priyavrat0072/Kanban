import { useContext, useState } from "react"
import { TaskContext } from "./context/TaskContext"
import TaskModel from "./TaskModal"
import TaskDetailModel from "./TaskDetailModel"
import { useDraggable } from "@dnd-kit/core"


const Task =({task})=>{
    // console.log(task)
    const {deleteTask} = useContext(TaskContext)
    const [isEditable , setIsEditable] = useState(false)
    const [isDetialsOpen , setIsDetialsOpen] = useState(false)
    const {attributes , listeners , setNodeRef ,transform} = useDraggable({
        id:task.id
    })

    return(
        <div 
        className="bg-white border rounded-lg p-3 sm:p-4 m-2 sm:m-3 shadow max-w-full"
        onClick={()=>setIsDetialsOpen(true)} 
        ref={setNodeRef} 
        style={{
        transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined
        }}
        >
            <div {...listeners} {...attributes} className="cursor-grab">⋮⋮</div>
            <h3 className="text-lg font-bold wrap-break-word">{task.title}</h3>
            <p className="text-sm text-gray-600 mt-2 wrap-break-word">{task.description}</p>
            <p className="text-sm mt-3">Priority <span className="font-semibold">{task.priority}</span></p>
            <div className="flex flex-wrap gap-2 mt-4">
                <button className="border px-3 py-1.5 rounded" onClick={(e)=>{e.stopPropagation(), setIsEditable(true)}}>Edit</button>
                <button className="border px-3 py-1.5 rounded" onClick={(e)=>{e.stopPropagation(),deleteTask(task.id)}}>Delete</button>
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