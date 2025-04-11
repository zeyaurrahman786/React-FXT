import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
        if(count >= 10) {
            setCount(0);
        }
    }

    function decrement(){
        setCount(count - 1);
        if(count <= -1) {
            setCount(0);
        }
    }

    function reset() {
        setCount(0);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>Count :- {count}</h2>
            <button onClick={increment}>Increment</button>
            &nbsp; &nbsp; 
            <button onClick={decrement}>Decrement</button>
            <br /> <br />
            <button onClick={reset}>Reset</button>
        </>
    )
}