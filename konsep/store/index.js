const { createStore } = require('./redux');

/** action todos */
function addTodoAction({ id, text }) {
  return {
    type: 'ADD_TODO',
    payload: {
      id,
      text,
      complete: false,
    },
  };
}

function deleteTodoAction(id) {
  return {
    type: 'DELETE_TODO',
    payload: {
      id,
    },
  };
}

function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      id
    }
  };
}
// resucer
function todosReducer(todos = [], action = {}) {
  if (action.type === 'ADD_TODO') {
    return [...todos, action.payload];
  }

  if (action.type === 'DELETE_TODO') {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }

  if (action.type === 'TOGGLE_TODO') {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return todo.complete === true ? { ...todo, complete: false } : { ...todo, complete: true };
      }
      return todo;
    });
  }
  return todos;
}

function addGoalActionCreator({ id, text }) {
  return {
    type: 'ADD_GOAL',
    payload: {
      id,
      text,
    }
  }
}

function deleteGoalActionCreator(id) {
  return {
    type: 'DELETE_GOAL',
    payload: {
      id,
    }
  }
}

function goalsReducer(goals = [], action = {}) {
  if (action.type === 'ADD_GOAL') {
    return [...goals, action.payload];
  }

  if (action.type === 'DELETE_GOAL') {
    return goals.filter((goal) => goal.id !== action.payload.id);
  }

  return goals;
}

function rootReducer(state = {}, action = {}) {
  return {
    todos: todosReducer(state.todos, action),
    goals: goalsReducer(state.goals, action)
  }
}

/** ======================================================================== */

const store = createStore(rootReducer);

const unsubscribe = store.subscribe(() => {
  console.log('state changed', store.getState());
});

// add todo 1
store.dispatch(
  addTodoAction({
    id: 1,
    text: 'Learn state 1',
  }),
);

// add todo 2
store.dispatch(
  addTodoAction({
    id: 2,
    text: 'Learn state 2',
  }),
);
// addtodo 3
store.dispatch(
  addTodoAction({
    id: 3,
    text: 'Learn state 3',
  }),
);
unsubscribe();

const listenDeleteTodo = store.subscribe(() => {
  console.log('delete todo success', store.getState());
});

store.dispatch(
  deleteTodoAction(1),
);
 // delete listener
listenDeleteTodo();

// // cahnge toggle todo
// store.dispatch(toggleTodo(2));
// store.dispatch(toggleTodo(2));

store.subscribe(() => {
  console.log('goals', store.getState())
})
store.dispatch(addGoalActionCreator({
  id: '1',
  text: 'ini goals',
}));