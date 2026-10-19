import {useState} from 'react';


function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>Brojač: {counter}</h1>

            <button onClick={() => setCounter(counter + 1)}>Povećaj</button>
            <button onClick={() => setCounter(counter - 1)}>Smanji</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </div>
    )
}

export default Counter;