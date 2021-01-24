import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);

    // const firstValue = text || 'hello world';
    // const secondValue = text && 'hello world';

    return (
        <>
            <button
                className='btn'
                onClick={() => {
                    setIsError(!isError);
                }}
            >
                Error
            </button>
            {isError && <h2>Error...</h2>}
        </>
    );
};

export default ShortCircuit;
