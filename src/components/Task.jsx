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
        className="bg-white border rounded-lg p-3 sm:p-4 m-2 sm:m-3 shadow max-w-full relative"
        onClick={()=>setIsDetialsOpen(true)} 
        ref={setNodeRef} 
        style={{
        transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined
        }}
        >
            <div {...listeners} {...attributes} className="cursor-grab absolute top-2 right-3 text-2xl font-bold">⋮⋮</div>
            <h3 className="text-lg font-bold wrap-break-word underline"><span>Title : </span>{task.title}</h3>
            <p className="font-medium m-0">Description :</p>
            <p className="text-sm text-gray-600 mt-2 wrap-break-word h-14 overflow-y-auto">{task.description}</p>
            <p className="text-sm mt-3">Priority : <span className="font-semibold">{task.priority}</span></p>
            <div className="flex flex-wrap gap-2 mt-4">
                <button className="px-3 py-1.5  border-2 rounded-xl border-orange-600 bg-orange-500 " onClick={(e)=>{e.stopPropagation(), setIsEditable(true)}}>Edit</button>
                <button className="border-2 px-3 py-1.5 rounded-xl border-red-600 bg-red-500" onClick={(e)=>{e.stopPropagation(),deleteTask(task.id)}}>Delete</button>
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