import PropTypes from 'prop-types';

function GoalItem({ id, text, deleteGoal}) {
   return (
      <div>
         <span>{text}</span>
         <button onClick={() => deleteGoal(id)}>X</button>
      </div>
   );
}

GoalItem.propTypes = {
   id: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
   deleteGoal: PropTypes.func.isRequired,
}

export default GoalItem;