import React from 'react';
import { TodoType } from '../helpers/todoType';

interface Props {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className='flex justify-evenly w-[50%] flex-wrap my-4'>
      {todos.map((todo) => (
        // todo card with yellow background
        <div
          key={todo.id}
          className='flex items-center justify-between py-[10px] pl-[30px] pr-[10px] bg-slate-200 rounded-[50px] my-[12px] w-full shadow-[inset_0_-1px_10px_rgba(0,0,0,0.6)]'>
          <div className='flex items-center'>
            {/* checkbox */}
            <input
              type='checkbox'
              className='h-[20px] w-[20px] rounded-full border-2 border-black'
              checked={todo.completed}
              onChange={() => {
                setTodos((prev) =>
                  prev.map((item) => {
                    if (item.id === todo.id) {
                      return {
                        ...item,
                        completed: !item.completed,
                      };
                    }
                    return item;
                  })
                );
              }}
            />
            {/* todo text */}
            <p
              className={`ml-[10px] text-[20px] ${
                todo.completed ? 'line-through' : ''
              }`}>
              {todo.content}
            </p>
          </div>
          {/* delete button */}
          <button
            className='px-[10px] py-[5px] rounded-[20px] bg-red-500 text-white active:scale-95'
            onClick={() => {
              setTodos((prev) => prev.filter((item) => item.id !== todo.id));
            }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
