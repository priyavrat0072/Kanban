const TaskDetailModel =({task , onClose })=>{
    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center" onClick={(e)=>e.stopPropagation()}>
            <div className="bg-white p-6 rounded-xl w-96">
                    <h2 className="text-xl font-bold">Task Info</h2>
                    <p>{task.title}</p>
                    <p>{task.description}</p>
                    <p>{task.priority}</p>
                    <button onClick={onClose}>Close</button>
                    
            </div>
        </div>
    )
}
export default TaskDetailModel