import React from 'react'
import GoalInput from './GoalInput'
import GoalItem from './GoalItem'
import { useSelector, useDispatch } from 'react-redux'
import {
  addGoalActionCreator,
  asyncAddGoal,
  asyncDeleteGoal,
  asyncReceiveGoals,
  deleteGoalActionCreator
} from '../states/goals/action'

function GoalsList () {
  const goals = useSelector(states => states.goals)
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncReceiveGoals());
  }, [dispatch])

  const onDeleteGoal = id => {
    // dispatch(deleteGoalActionCreator(id))

    //with thun
    dispatch(asyncDeleteGoal(id));
  }

  const onAddGoal = text => {
    // dispatch(
    //   addGoalActionCreator({
    //     id: `goal-${+new Date()}`,
    //     text,
    //   })
    //   )

    // with thunk
    dispatch(asyncAddGoal(text));
  }
  return (
    <div>
      <h3>My Goals</h3>
      <GoalInput addGoal={onAddGoal} />

      <ul>
        {goals.map((goal, i) => (
          <li key={i}>
            <GoalItem {...goal} addGoal={onAddGoal} deleteGoal={onDeleteGoal} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GoalsList
