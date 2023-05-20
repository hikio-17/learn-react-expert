import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ id, text, complete, deleteTodo }) {
   return (
      <div>
         <span>{text}</span>
         <button onClick={() => deleteTodo(id)}>X</button>
      </div>
   );
};

TodoItem.propTypes = {
   id: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
   complete: PropTypes.bool.isRequired,
   deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;