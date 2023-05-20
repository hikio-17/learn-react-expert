import React from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

function TodoList () {
  const todos = []

  const onAddTodo = text => {
    //
  }

  const onDeleteTodo = id => todos.filter(todo => todo.id !== id)
  return (
    <div>
      <h3>My Todos</h3>
      <TodoInput addTodo={onAddTodo} />

      <ul>
        {todos.map(todo => (
          <li>
            <TodoItem {...todo} deleteTodo={onDeleteTodo} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
