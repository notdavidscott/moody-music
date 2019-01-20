import React from 'react';
import Button from './Button';
import PostForm from './PostForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <PostForm />,
        <Button />
      </div>
    );
  }
}

export default App;
