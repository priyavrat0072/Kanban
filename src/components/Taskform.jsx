const Taskform = () => {
  return (
    <div className="flex gap-10 bg-amber-200 justify-center p-2">
      <input
        type="text"
        placeholder="Enter your task...."
        className="border w-96 h-12 p-2"
      />
      <textarea 
        placeholder="Enter the description"
        className="border w-96 h-12 p-2"
      />
      <select>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <button type="button" className="border w-24">
        Add Todo
      </button>
    </div>
  );
};
export default Taskform;
