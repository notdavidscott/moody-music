import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div className="ui inverted black basic button">
        <button className="ui violet button">
        <i class="play icon"></i>
          Mood
        </button>
      </div>
    );
  }
}

export default Button;
