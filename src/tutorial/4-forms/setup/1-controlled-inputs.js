import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);
    const submitter = (e) => {
        e.preventDefault();
        if (firstName && email) {
            const person = {
                id: new Date().getTime().toString(),
                firstName,
                email,
            };
            setPeople((people) => {
                return [...people, person];
            });
        }
        setFirstName('');
        setEmail('');
    };
    return (
        <>
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor='firstName'>Name:</label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className='btn' onClick={submitter}>
                    Submit
                </button>
            </form>
            {people.map((person) => {
                const { id, firstName, email } = person;
                return (
                    <div className='item' key={id}>
                        <h2>{firstName}</h2>
                        <p>{email}</p>
                    </div>
                );
            })}
        </>
    );
};

export default ControlledInputs;
