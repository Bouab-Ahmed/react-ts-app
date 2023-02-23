import React from 'react';
import { Action, TodoType } from '../helpers/todoType';
import SingleTodo from './SingleTodo';

interface Props {
  state: TodoType[];
  dispatch: React.Dispatch<Action>;
}

const TodoList: React.FC<Props> = ({ state, dispatch }: Props) => {
  return (
    <>
      <div className='flex justify-evenly w-[50%] flex-wrap my-4'>
        {state.map((todo) => (
          // todo card with yellow background
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={state}
            dispatch={dispatch}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
