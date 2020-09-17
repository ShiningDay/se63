import React, {useState} from 'react';
import './App.css';

type App2Props = {
  message?: string;
};

const App2 = (props: App2Props) => {
    const [counter, setCounter] = useState<number>(0);

    const incCounter = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            {props.message ? props.message : "Nothing"}
            <br />
            Counter = {counter}
            <br />
            <button onClick={incCounter}>Increment</button>
        </div>
    );
};

export default App2;