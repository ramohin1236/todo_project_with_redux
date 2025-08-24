import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoLists = () => {
  const { items, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (loading) {
    return <div className="text-2xl font-bold">Loading......</div>;
  }
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex flex-col items-center  space-y-4">
      <p>df</p>
      <div>
        <input
          type="text"
          placeholder="add a task"
          className="border border-green-300 rounded-md p-2 focus:border-green-500"
        />
        <button
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
          <li key={item.id} className="border-b border-gray-300 py-2">
            <span
              className={`${
                item.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {item.title}
            </span>
            <button className="text-red-500 hover:underline">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;
