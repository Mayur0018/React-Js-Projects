const Todolist = () => {
  return (
    <div>
    <h1 className="bg-violet-300 text-white p-3 flex justify-center items-center w-screen h-[10vh] sm:h-[16vh] font-bold text-2xl sm:text-3xl md:text-4xl ">
      Mayur To-Do List
    </h1>

    <form className='mt-10 flex flex-col md:flex-row md:justify-around'>
      <input type="text" className='w-[60vw] md:w-[20vw] px-4 py-2 text-xl md:text-2xl border-2 m-2 mt-8 sm:m-5' placeholder='enter your task' 
      
      />

       <input type="text" className='w-[60vw] md:w-[20vw] px-4 py-2 text-xl md:text-2xl border-2 m-2 mt-8 sm:m-5' placeholder='description of task' 
      
      />
      <button className='bg-blue-700 text-xl md:text-2xl w-[35vw] md:w-[10vw] px-4 py-2 m-2 mt-8 sm:m-5 text-white'>Add Task</button>
    </form>
    </div>
  )
}

export default Todolist;