var React = require('react');
var PropTypes = require('prop-types');

function SelectedTime(props) {
  return (
    <button href="#"
      className='button'
      onClick={props.onSelect.bind(null, props.time)}
    >
    {props.time === 'recent' ? 'In the Past 30 Days' : "All Time Top Score"}
    </button>
  )
}

SelectedTime.propTypes = {
  time: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

module.exports = SelectedTime;
