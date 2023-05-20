import React from 'react';
import PropTypes from 'prop-types';

function TodoInput({ addTodo }) {
   const [ text, setText ] = React.useState('');

   const handleAddTodo = () => {
      addTodo(text);
      setText('')
   }

   const onChangeTextHandler = ({ target }) => setText(target.value);
   return (
      <div>
         <input type='text' value={text} onChange={onChangeTextHandler} />
         <button onClick={handleAddTodo}>Add Todo</button>
      </div>
   );
}

TodoInput.propTypes = {
   addTodo: PropTypes.func.isRequired,
};

export default TodoInput;
