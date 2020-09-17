import React, { useEffect, useState } from 'react';

import './App.css';
import { Course } from './interfaces';
import CourseItem  from './CourseItem';
const App = () => { //function with hook
  const [courses,setCourses] = useState<Course[]>([]);

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
        <CourseItem key={item.id} course={item} />
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
