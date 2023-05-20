import React from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { addTodoActionCreator, asyncAddTodo, asyncDeleteTodo, asyncReceiveTodos, asyncToggleTodo, deleteTodoActionCreator, toggleTodoActionCreator} from '../states/todos/action';

function TodoList () {
  const todos = useSelector((states) => states.todos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncReceiveTodos())
  }, [dispatch]);

  const onAddTodo = text => {
    // dispatch(addTodoActionCreator({
    //   id: `todo-${+new Date()}`,
    //   text,
    //   complete: false,
    // }))

    // with async
    dispatch(asyncAddTodo(text));
  }

  const onDeleteTodo = (id) => {
    // dispatch(
    //   deleteTodoActionCreator(id),
    // );

    // wtih async
    dispatch(asyncDeleteTodo(id));
  }

  const onToggleTodo = (id) => {
    // dispatch(toggleTodoActionCreator(id));

    // with async
    dispatch(asyncToggleTodo(id));
  }
  return (
    <div>
      <h3>My Todos</h3>
      <TodoInput addTodo={onAddTodo} />

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <TodoItem  {...todo} toggleTodo={onToggleTodo} deleteTodo={onDeleteTodo} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
