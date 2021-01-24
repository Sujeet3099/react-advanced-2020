import React, { useState } from 'react';

const UseStateBasics = () => {
    const [text, setText] = useState('This is the default Title');
    let determineToggle = true;
    const handler = () => {
        if (determineToggle === true) {
            setText('Hey it got changed. Wow !');
            determineToggle = false;
            // console.log(text)
        } else {
            setText('This is the default Title');
            determineToggle = true;
            // console.log(text)
        }
    };
    return (
        <React.Fragment>
            <h2>{text}</h2>
            <button className='btn' onClick={handler}>
                Change Title
            </button>
        </React.Fragment>
    );
};

export default UseStateBasics;
