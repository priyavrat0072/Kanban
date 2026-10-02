import { useDroppable } from "@dnd-kit/core"
import Task from "./Task"

const Column =({title , status , tasks})=>{

    const {setNodeRef} = useDroppable({
        id:status
    })

    return(
        <div ref={setNodeRef} className="bg-gray-100 border rounded-xl min-h-96 p-3" >
            <h2 className="text-xl font-bold mb-3">{title}</h2>
            {
                tasks.filter((task) => task.status == status)
                .map((task) => (
                    <Task key={task.id} task={task}/>
                ))
            }
        </div>
    )
}
export default Column