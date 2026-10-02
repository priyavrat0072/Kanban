const TaskDetailModel =({task , onClose })=>{
    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4" onClick={(e)=>e.stopPropagation()}>
            <div className="bg-white p-4 sm:p-6 rounded-xl w-[90%] sm:w-96">
                    <h2 className="text-xl font-bold mb-4">Task Info</h2>
                    <p className="font-semibold wrap-break-word">{task.title}</p>
                    <p className="text-gray-600 mt-2 wrap-break-word">{task.description}</p>
                    <p className="mt-3">
                        Priority: <span className="font-semibold">{task.priority}</span>
                    </p>
                    <button onClick={onClose} className="border px-4 py-2 rounded mt-4 w-full sm:w-auto">Close</button>
                    
            </div>
        </div>
    )
}
export default TaskDetailModel