import React, { useState } from 'react';


function Home() {
    const [count, setCount] = useState<number>(0);

    return (
        <div className=''>
            <h1>Home</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Home;