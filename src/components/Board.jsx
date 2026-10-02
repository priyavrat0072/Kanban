import { useContext } from "react"
import Taskform from "./Taskform.jsx"
import { TaskContext } from "./context/TaskContext.jsx"
import { DndContext } from "@dnd-kit/core"
import Column from "./column.jsx"


const Board =()=>{

    const {tasks , updateTask} = useContext(TaskContext)

    const handleDragEnd = ({active , over}) =>{
        if(!over) return

        const task = tasks.find((task) => task.id === active.id)

        if(!task) return

         if (task.status === over.id) return

        updateTask({
            ...task,
            status : over.id
        })
    }

    return(
        <div>
            <Taskform />
            <DndContext onDragEnd={handleDragEnd}>  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-3 py-5 sm:px-5 ">
                <Column 
                    title = "To Do"
                    status="todo"
                    tasks={tasks}
                />
                <Column 
                    title = "In Progress"
                    status="in-progress"
                    tasks={tasks}
                />
                <Column 
                    title = "Done"
                    status="done"
                    tasks={tasks}
                />
                
            </div>
            </DndContext>
        </div>
    )
}
export default Board