/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';

function Display({ count }) {
  return (
    <div className="Display">
      <h1>{count}</h1>
    </div>
  );
}

Display.propTypes = {
  count: PropTypes.func.isRequired,
};

export default Display;