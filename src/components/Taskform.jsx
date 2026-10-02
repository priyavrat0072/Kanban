import { useState , useContext} from "react";
import { TaskContext } from "./context/TaskContext";

const Taskform = () => {

    const [title , setTitle] = useState("")
    const [description , setDescription] = useState("")
    const [priority , setPriority] = useState("low") 
    const [error , setError] = useState("")

    const {addTask} = useContext(TaskContext)
    
    const handleTaskInput =(e)=>{
        e.preventDefault()

        if(!title.trim() || !description.trim()){
            setError("Please fill all fields")
            return
        }
        setError("")
        const newTask = {
            id : crypto.randomUUID(),
            title,
            description,
            priority,
            status : "todo"
        }
        addTask(newTask)
        setTitle("")
        setDescription("")
        setPriority("low")
    }

  return (
    <form className="flex gap-10 bg-amber-200 justify-center p-2">
      <input
        type="text"
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        placeholder="Enter your task...."
        className="border w-96 h-12 p-2"
      />
      <input
        type="text"
        value={description}
        onChange={(e)=>{setDescription(e.target.value)}} 
        placeholder="Enter the description"
        className="border w-96 h-12 p-2"
      />
      <select 
       value={priority}
        onChange={(e)=>{setPriority(e.target.value)}}
       >
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <button type="button" className="border w-24" onClick={handleTaskInput}>
        Add Todo
      </button>
      {
        error && (
            <p className="text-red-500 text-sm mt-2">
                {error}
            </p>
        )
      }
    </form>
  );
};
export default Taskform;
