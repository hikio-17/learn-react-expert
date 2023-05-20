import React from 'react';
import GoalsList from "./components/GoalList";
import TodoList from "./components/TodoList";

function App() {
   return (
      <div>
         <GoalsList />
         <br /><br />
         <TodoList />
      </div>
   )
}

export default App;