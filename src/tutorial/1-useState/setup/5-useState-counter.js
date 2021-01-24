import React, { useState } from 'react';

const UseStateCounter = () => {
    const [counter, setCounter] = useState(1);

    return (
        <>
            <section style={{ margin: '4rem 0' }}>
                <h2>Regular Counter</h2>
                <h1>{counter}</h1>
                <button className='btn' onClick={() => setCounter(counter - 1)}>
                    Decrease
                </button>
                <button className='btn' onClick={() => setCounter(0)}>
                    Reset
                </button>
                <button className='btn' onClick={() => setCounter(counter + 1)}>
                    Increase
                </button>
            </section>
        </>
    );
};

export default UseStateCounter;
