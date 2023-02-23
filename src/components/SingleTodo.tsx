import React, { useEffect, useRef, useState } from 'react';
import { Action, TodoType } from '../helpers/todoType';

interface Props {
  todo: TodoType;
  todos: TodoType[];
  dispatch: React.Dispatch<Action>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, dispatch }: Props) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.content);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setTodos((prev) =>
    //   prev.map((item) => {
    //     if (item.id === todo.id) {
    //       return {
    //         ...item,
    //         content: editTodo,
    //       };
    //     }
    //     return item;
    //   })
    // );
    dispatch({
      type: 'EDIT_TODO',
      payload: { id: todo.id, content: editTodo, completed: todo.completed },
    });
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <div
      key={todo.id}
      className='flex items-center justify-between py-[10px] pl-[30px] pr-[10px] bg-slate-200 rounded-[50px] my-[12px] w-full shadow-[inset_0_-1px_10px_rgba(0,0,0,0.6)]'>
      <form
        className='flex items-center'
        onSubmit={(e) => {
          handleEdit(e);
        }}>
        <input
          type='checkbox'
          className='h-[20px] w-[20px] rounded-full border-2 border-black'
          checked={todo.completed}
          onChange={() => {
            // setTodos((prev) =>
            //   prev.map((item) => {
            //     if (item.id === todo.id) {
            //       return {
            //         ...item,
            //         completed: !item.completed,
            //       };
            //     }
            //     return item;
            //   })
            // );
            dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
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
              ref={inputRef}
              value={editTodo}
              className='mx-[10px] text-[20px] text-black focus:outline-none'
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
      <button
        className='px-[10px] py-[5px] rounded-[20px] bg-red-500 text-white active:scale-95'
        onClick={() => {
          // setTodos((prev) => prev.filter((item) => item.id !== todo.id));
          dispatch({ type: 'REMOVE_TODO', payload: todo.id });
        }}>
        Delete
      </button>
    </div>
  );
};

export default SingleTodo;
