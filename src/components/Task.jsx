const Task =()=>{
    return(
        <div className="bg-white border rounded p-4 m-3 shadow">
            <h3 className="text-lg font-bold">Learn React</h3>
            <p className="text-sm text-gray-600 mt-2">Practice context API and hooks</p>
            <p className="text-sm mt-3">Priority <span className="font-semibold">High</span></p>
            <div className="flex gap-2 mt-4">
                <button className="border px-3 py-1">Edit</button>
                <button className="border px-3 py-1">Delete</button>
            </div>
        </div>
    )
}
export default Task