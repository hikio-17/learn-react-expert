import React from 'react';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';

function GoalsList() {
   const goals = [];

   const onDeleteGoal = (id) => goals.filter((goal) => goal.id !== id); 

   const onAddGoal = () => {
      //
   }
   return (
      <div>
         <h3>My Goals</h3>
         <GoalInput addGoal={onAddGoal}/>

         <ul>
            {goals.map((goal) => (
               <li><GoalItem  {...goal} deleteGoal={onDeleteGoal}/></li>
            ))}
         </ul>
      </div>
   );
}

export default GoalsList;