import React, { useRef } from 'react';
import { Action } from '../helpers/todoType';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  dispatch: React.Dispatch<Action>;
}

const InputField = ({ todo, setTodo, dispatch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className='w-[95%]'
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: 'ADD_TODO',
          payload: { id: Date.now(), content: todo, completed: false },
        });
        inputRef.current?.blur();
      }}>
      <div className='w-[50%] relative mx-auto flex items-center'>
        <input
          type='text'
          value={todo}
          placeholder='Add a todo'
          className='w-[100%] mx-auto h-[50px] rounded-[50px] outline-none py-[20px] px-[30px] text-[20px] text-black shadow-[inset_0_-1px_10px_rgba(0,0,0,0.6)] focus:outline-none focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.6)]'
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type='submit'
          className='absolute right-0 mx-1 p-[10px] shadow-lg  text-white rounded-[50px] bg-blue-500 active:scale-95'>
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default InputField;
