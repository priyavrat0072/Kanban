import { useDroppable } from "@dnd-kit/core"
import Task from "./Task"

const Column = ({ title, status, tasks }) => {

    const { setNodeRef } = useDroppable({
        id: status
    })

    return (
        <div
            ref={setNodeRef}
            className="bg-gray-100 border rounded-xl h-96 p-2 sm:p-3 w-full min-w-0"
        >
            <h2 className="text-xl font-bold mb-3">
                {title}
            </h2>

            <div className="h-80 overflow-y-auto">
                {
                    tasks
                        .filter((task) => task.status === status)
                        .map((task) => (
                            <Task
                                key={task.id}
                                task={task}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default Column