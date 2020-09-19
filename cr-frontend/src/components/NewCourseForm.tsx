import React, {useState } from 'react';

type NewCourseFormProps = {
};

const NewCourseForm = (props: NewCourseFormProps) => {
    const [newCourseNumber, setNewCourseNumber] = useState<string>('');
    const [newCourseTitle, setNewCourseTitle] = useState<string>('');
    
    const handleNewCourseNumber = (e:React.ChangeEvent<HTMLInputElement>) => { //function ข้างนอก
        setNewCourseNumber(e.target.value);
    };
    
    const handleSave = () => {
      alert(`${newCourseTitle} -- ${newCourseTitle}` )
    };

    return (
        <div>
            Number: <input value={newCourseNumber} onChange={handleNewCourseNumber} /><br />
            Title: <input value={newCourseTitle} onChange={(e) => {setNewCourseTitle(e.target.value)}} /><br />
            <button onClick={handleSave}>Save</button>
        </div>
    )
};

export default NewCourseForm;