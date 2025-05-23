import { useToDoStore } from "./logic";
import { useState } from "react";
export default function ToDo() {
  const { todo, addTodo, updateTodo, removeTodo } = useToDoStore();
  const [curr, setCurr] = useState(todo.length - 1);
  if (todo.length === 0) {
    addTodo(Date.now(), "");
  }

  return (
    <>
      <article className="rounded-xl border h-200 w-250 border-gray-900 bg-[#191919] p-4 overflow-y-scroll ">
        <div className="flex justify-center font-bold text-lg">
          Notes / To Do List
        </div>

        <ul className="mt-4 space-y-2">
          {todo.map((item, index) => (
            <li key={item.id} className="flex flex-row">
              <>
                <textarea
                  className="flex-1 block rounded-lg border border-gray-700 mr-4 p-3 h-[54px]"
                  value={item.value}
                  onChange={(e) => {
                    console.log(curr);
                    updateTodo(item.id, e.target.value);
                    if (index === curr) {
                      addTodo(Date.now(), "");
                      setCurr(curr + 1);
                    }
                  }}
                />

                <button
                  className="block h-full rounded-lg border border-gray-700 p-4 hover:text-red-600 hover:border-red-600 cursor-pointer"
                  onClick={() => {
                    removeTodo(item.id);
                    setCurr(curr - 1);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
