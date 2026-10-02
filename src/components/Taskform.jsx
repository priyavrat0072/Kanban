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
   <form >
    <div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-center p-3">
        <input
        type="text"
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        placeholder="Enter your task...."
        className="w-96 h-12 p-4 border-2 rounded-2xl "
      />
      <input
        type="text"
        value={description}
        onChange={(e)=>{setDescription(e.target.value)}} 
        placeholder="Enter the description"
        className="w-96 h-12 p-4 border-2 rounded-2xl"
      />
      <select 
       value={priority}
        onChange={(e)=>{setPriority(e.target.value)}}
        className="w-full md:w-32 h-12 p-2 border-2 rounded-2xl"
       >
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <button type="button" className="border-2 border-green-900 rounded-4xl bg-green-600 text-amber-50 w-full md:w-24 h-12" onClick={handleTaskInput}>
        Add Todo
      </button>

    </div>
      {
        error && (
            <p className="text-red-500 text-sm mt-2 text-center font-bold bg-white w-fit mx-auto px-3 py-1 rounded-2xl">
                {error}
            </p>
        )
      }
    </form>
  );
};
export default Taskform;
