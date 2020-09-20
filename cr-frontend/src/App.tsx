import React, { useEffect, useState } from 'react';
import NewCourseForm from './components/NewCourseForm';
import './App.css';

import { Course } from './interfaces';
import CourseItem  from './components/CourseItem';

const App = () => { //function with hook
  const [courses,setCourses] = useState<Course[]>([]);
  const [formVisible, setFormVisible] = useState<boolean>(false);
 
  const toggleFormVisible = () => {
    setFormVisible(!formVisible);
  };
  const fetchCourses = () => {
    fetch('http://localhost:3000/courses/')
    .then(res => res.json())
    .then(courses => {
       setCourses(courses);
    });
  }

  const handleNewCourseCreated = (course: Course) => {
    fetchCourses();
    setFormVisible(false);
  }

  useEffect(() => { 
    fetchCourses();
  },[]);

  return (
    <div className="App">
      <ul>
      {courses.map(item => (
        <CourseItem key={item.id} course={item} />
      ))}
      </ul>
      <button onClick={toggleFormVisible}>New course</button>
      {formVisible &&
        <NewCourseForm onNewCourseCreated={handleNewCourseCreated}/>
       
      }
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
