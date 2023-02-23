import React, { useState } from 'react';
import { TodoType } from '../helpers/todoType';
import SingleTodo from './SingleTodo';

interface Props {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <>
      <div className='flex justify-evenly w-[50%] flex-wrap my-4'>
        {todos.map((todo) => (
          // todo card with yellow background
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
