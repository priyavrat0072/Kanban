import { useContext } from "react"
import Task from "./Task"
import Taskform from "./Taskform"
import { TaskContext } from "./context/TaskContext"


const Board =()=>{

    const {tasks} = useContext(TaskContext)

    return(
        <div>
            <Taskform />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 ">
                <div className=" bg-amber-100 border border-amber-300 rounded-xl h-140 overflow-y-auto">
                    <h2 className="text-xl font-bold bg-amber-300 p-4 rounded-t-xl">To Do</h2>
                    {
                        tasks.map((task)=>(
                            <Task key={task.id} task={task} />
                        ))
                    }
                </div>
                <div className=" bg-blue-100 border border-blue-300 rounded-xl min-h-96 h-140 overflow-y-auto">
                    <h2 className="text-xl font-bold bg-blue-300 p-4 rounded-t-xl">In Progress</h2>
               
                </div>
                <div className=" bg-pink-100 border border-pink-300 rounded-xl min-h-96 h-140 overflow-y-auto">
                    <h2 className="text-xl font-bold bg-pink-300 p-4 rounded-t-xl">Done</h2>
                   
                </div>
            </div>
        </div>
    )
}
export default Board