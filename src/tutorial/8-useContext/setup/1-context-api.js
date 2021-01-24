import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)
const peopleContext = React.createContext();

const ContextAPI = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };
    return (
        <peopleContext.Provider value={{ removePerson, people }}>
            <h3>Context API / useContext()</h3>
            <List />
        </peopleContext.Provider>
    );
};

const List = () => {
    const peopleData = useContext(peopleContext);
    return (
        <>
            {peopleData.people.map((person) => {
                return <SinglePerson key={person.id} {...person} />;
            })}
        </>
    );
};

const SinglePerson = ({ id, name }) => {
    const peopleData = useContext(peopleContext);
    console.log(peopleData);
    return (
        <div className='item'>
            <h4>{name}</h4>
            <button onClick={() => peopleData.removePerson(id)}>remove</button>
        </div>
    );
};

export default ContextAPI;
