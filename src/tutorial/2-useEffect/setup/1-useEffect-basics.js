import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log('Renderd');
        if (value === 1) document.title = `(${value}) New Message`;
        else if (value >= 1) document.title = `(${value}) New Messages`;
    }, [value]);
    return (
        <>
            <h2>{value}</h2>
            <button className='btn' onClick={() => setValue(value + 1)}>
                Change + 1
            </button>
        </>
    );
};

export default UseEffectBasics;
