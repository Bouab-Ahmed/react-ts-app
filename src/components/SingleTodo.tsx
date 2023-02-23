import React, { useState } from 'react';
import { TodoType } from '../helpers/todoType';

interface Props {
  todo: TodoType;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.content);
  return (
    <div
      key={todo.id}
      className='flex items-center justify-between py-[10px] pl-[30px] pr-[10px] bg-slate-200 rounded-[50px] my-[12px] w-full shadow-[inset_0_-1px_10px_rgba(0,0,0,0.6)]'>
      <form
        className='flex items-center'
        onSubmit={(e) => {
          e.preventDefault();
          setTodos((prev) =>
            prev.map((item) => {
              if (item.id === todo.id) {
                return {
                  ...item,
                  content: editTodo,
                };
              }
              return item;
            })
          );
          setEdit(!edit);
        }}>
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
        <div
          onClick={() => {
            if (!edit && !todo.completed) {
              setEdit(!edit);
            }
          }}>
          {edit ? (
            <input
              type='text'
              value={editTodo}
              className='mx-[10px] text-[20px] text-black'
              onChange={(e) => setEditTodo(e.target.value)}
            />
          ) : (
            <p
              className={`mx-[10px] text-[20px] text-black ${
                todo.completed && 'line-through'
              }`}>
              {todo.content}
            </p>
          )}
        </div>
      </form>
      {/* delete button */}
      <button
        className='px-[10px] py-[5px] rounded-[20px] bg-red-500 text-white active:scale-95'
        onClick={() => {
          setTodos((prev) => prev.filter((item) => item.id !== todo.id));
        }}>
        Delete
      </button>
    </div>
  );
};

export default SingleTodo;
