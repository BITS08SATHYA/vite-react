import React, {useEffect, useState} from 'react';
import './apps_css/App_UseEffect.css'

function App(){

    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `Count: ${count}`
    },[count]);

    const incrementCount = () => {
        setCount(count + 1);
        // document.title = `Count: ${count}`
    }


    return (
        <div>
            <h1>UseEffect Hook</h1>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}

export default App;