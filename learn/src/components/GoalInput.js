import React from "react";
import PropTypes  from 'prop-types';

function GoalInput({ addGoal }) {
   const [ text, setText ] = React.useState('');

   const onTextChangeHandler = ({ target }) => setText(target.value);

   const handleAddGoal = () => {
      addGoal(text);
      setText('');
   }
   return (
      <div>
         <input type="text" value={text} onChange={onTextChangeHandler}/>
         <button onClick={handleAddGoal}>Add Goal</button>
      </div>
   )
}

GoalInput.propTypes = {
   addGoal: PropTypes.func.isRequired,
}

export default GoalInput;