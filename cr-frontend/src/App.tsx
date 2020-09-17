import React, { useEffect, useState } from 'react';

import './App.css';

const App = () => { //function with hook
  const [courses,setCourses] = useState<any[]>([]);

  useEffect(() => { //if changes do below
    fetch('http://localhost:3000/courses/')
    .then(res => res.json())
    .then(courses => {
      console.log(courses);
       setCourses(courses);
    });
  },[]);

  return (
    <div className="App">
      <ul>
      {courses.map(item => (
        <li key={item.id}>{item.number} - {item.title}</li>
      ))}
      </ul>
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
