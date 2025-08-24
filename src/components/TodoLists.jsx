import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodos, removeTodo, toggleTodo } from "../redux/features/todos/todoSlice";

const TodoLists = () => {
  const { items, loading, error } = useSelector((state) => state.todos);
  console.log(items)
  const dispatch = useDispatch();
  const [text, setText] = useState("")

//   fetching data
   useEffect(()=>{
           dispatch(fetchTodos())
   },[dispatch])

  if (loading) {
    return <div className="text-2xl font-bold">Loading......</div>;
  }
  if (error) return <div className="text-red-500">{error}</div>;

  const handleAddTodo = () =>{
    if(text.trim()){
         dispatch(addTodo(text))
         setText("")
    }
  }

  return (
    <div className="flex flex-col items-center  space-y-4">
      <p>df</p>
      <div>
        <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
          type="text"
          placeholder="add a task"
          className="border border-green-300 rounded-md p-2 focus:border-green-500"
        />
        <button
        onClick={handleAddTodo}
          className="bg-green-500 text-white p-2 rounded-md ml-2 px-6
            cursor-pointer hover:bg-green-600 transition-all transform duration-300
            "
        >
          Add
        </button>
      </div>

      {/* display task */}

      <ul>
        {items?.map((item) => (
          <li key={item.id} className="border-b border-gray-300 py-2 flex gap-4 justify-start">
            <span
            onClick={()=>dispatch(toggleTodo(item.id))}
              className={`${
                item.complete ? "line-through text-gray-500 cursor-pointer" : "cursor-pointer   "
              }`}
            >
              {item.title}{item.text}
            </span>
            <button
            onClick={()=>dispatch(removeTodo(item.id))}
            className="text-red-500 hover:underline cursor-pointer">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;
