import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    };

    return (
        <>
            <form className='form'>
                <div>
                    <input type='text' ref={refContainer} />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            <div ref={divContainer}>Hey Sujeet !</div>
        </>
    );
};

export default UseRefBasics;
