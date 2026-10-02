import { useDroppable } from "@dnd-kit/core"
import Task from "./Task"

const Column = ({ title, status, tasks }) => {

    const { setNodeRef } = useDroppable({
        id: status
    })

    return (
        <div
            ref={setNodeRef}
            className="bg-gray-300  border-red-800 border-2 rounded-xl h-150 p-2 sm:p-3 w-full min-w-0"
        >
            <h2 className="text-3xl font-bold mb-3 text-center underline">
                {title}
            </h2>

            <div className="h-130 overflow-y-auto">
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