import React from 'react';

const ErrorExample = () => {
    let title = 'The title got changed';
    const handleClick = () => {
        title = 'Hey People !';
        console.log(title);
    };
    return (
        <React.Fragment>
            <h2 id='change'>{title}</h2>
            <button className='btn' onClick={() => handleClick()}>
                Change Title
            </button>
        </React.Fragment>
    );
};

export default ErrorExample;
