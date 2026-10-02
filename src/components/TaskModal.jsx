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
            <div className="bg-white p-4 sm:p-6 rounded-xl w-[90%] sm:w-96">
                    <h2 className="text-xl font-bold">Edit Task</h2>
                    <input placeholder="Edit title..." type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="border-2 rounded-xl w-full h-10 p-2 mt-3"/>
                    <textarea
                        placeholder="Edit description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border-2 rounded-xl w-full h-40 p-2 mt-3 resize-none"
                        />
                    <select value={priority} onChange={(e)=>setPriority(e.target.value)} className="border-2 rounded-xl w-full h-10 p-2 mt-3">
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                        <button onClick={handleUpdate} className="border-2 bg-amber-500 rounded-xl border-amber-700 px-4 py-2">Update</button>
                        <button onClick={onClose} className="border-2 bg-gray-300 rounded-xl border-gray-500 px-4 py-2">Close</button>
                    </div>

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