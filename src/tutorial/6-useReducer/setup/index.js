import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';
// reducer function

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: '',
};

const Index = () => {
    const [person, setPerson] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (person) {
            const newPerson = {
                id: new Date().getTime().toString(),
                name: person,
            };
            dispatch({ type: 'ADD_ITEM', payload: newPerson });
            setPerson('');
            setTimeout(() => {
                dispatch({ type: 'FADE_OUT' });
            }, 2000);
        } else {
            dispatch({ type: 'NO_ITEM' });
            setTimeout(() => {
                dispatch({ type: 'FADE_OUT' });
            }, 2000);
        }
    };
    return (
        <>
            {state.isModalOpen && <Modal modalContent={state.modalContent} />}
            <form className='form'>
                <div>
                    <input
                        type='text'
                        value={person}
                        onChange={(e) => setPerson(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit}>add</button>
            </form>
            {state.people.map((person) => {
                const { id, name } = person;
                return (
                    <div className='item' key={id}>
                        <h4>{name}</h4>
                        <button
                            className='item'
                            onClick={() =>
                                dispatch({
                                    type: 'REMOVE_ITEM',
                                    payload: person.id,
                                })
                            }
                        >
                            remove
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default Index;
