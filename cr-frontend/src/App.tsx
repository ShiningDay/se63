import React, { useEffect, useState } from 'react';

import './App.css';

const App = () => { //function with hook
  const [message,setMessage] = useState('My message eiei');

  useEffect(() => { //if changes do below
    fetch('http://localhost:3000/courses/')
    .then(res => res.json())
    .then(obj => {
       setMessage(obj.message);
    });
  },[]);

  return (
    <div className="App">
      {message}
    </div>
  );
}

/* class component
type AppState = {
  message: string;
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    message: 'Default message',
  };

  componentDidMount() {
    fetch('http://localhost:3000/courses/')
      .then(res => res.json())
      .then(obj => {
        this.setState({message: obj.message});
      });
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}
*/
export default App;
