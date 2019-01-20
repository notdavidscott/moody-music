import React from 'react';

class PostForm extends React.Component {
  render() {
    return (
      <div className="ui form">
        <div className="field">
          <div className="ui huge header">
            <label> What Mood are you in?</label>
          </div>
          <select multiple="" className="ui dropdown">
            <option value="">Select Your mood</option>
            <option value="CH">Cheerful</option>
            <option value="EX">Excited</option>
            <option value="FR">Irritated</option>
            <option value="ME">Melancholy</option>
          </select>
        </div>
      </div>
    );
  }
}

export default PostForm;
