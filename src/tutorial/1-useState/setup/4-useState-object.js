import React, { useState } from 'react';

const UseStateObject = () => {
    const [people, setPeople] = useState({
        name: 'Sujeet',
        age: 22,
        msg: 'hey how are you?',
    });
    const changeMsg = () => {
        setPeople({ ...people, msg: 'Hey this is sujeet!' });
        console.log('thanks for using the site.');
    };
    return (
        <>
            <h3>{people.name}</h3>
            <h3>{people.age}</h3>
            <h3>{people.msg}</h3>
            <button className='btn' onClick={changeMsg}>
                Change Msg
            </button>
        </>
    );
};

export default UseStateObject;
