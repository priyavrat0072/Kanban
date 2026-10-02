import { useState,useContext } from "react"
import { TaskContext } from "./context/TaskContext"

const TaskModel = ({task , onClose}) =>{

        const {updateTask} = useContext(TaskContext)

        const [title , setTitle] = useState(task.title)
        const [description , setDescription] = useState(task.description)
        const [priority , setPriority] = useState(task.priority) 
        const [error , setError] = useState("")



        const handleUpdate =()=>{

            if(!title.trim() || !description.trim()){
                setError("Please fill all fields")
                return
            }
            setError("")
            const updatedTask = {
            id : task.id,
            title,
            description,
            priority,
            status: task.status
        }

            updateTask(updatedTask)
            onClose()
        }

    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white p-6 rounded-xl w-96">
                    <h2 className="text-xl font-bold">Edit Task</h2>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
                    <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={onClose}>Close</button>

                {error && (
                    <p className="text-red-500 text-sm mt-2">
                        {error}
                    </p>
                )}
            </div>
        </div>
    )
}
export default TaskModel