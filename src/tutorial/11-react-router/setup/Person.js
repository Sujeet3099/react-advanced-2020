import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
import People from './People';
const Person = () => {
    const [name, setName] = useState('defaultName');
    const { id } = useParams();
    useEffect(() => {
        const newPeople = data.find((person) => person.id === parseInt(id));
        setName(newPeople);
    }, []);
    return (
        <div>
            <h2>{name.name}</h2>
            <Link className='btn' to='/people'>
                Back to People
            </Link>
        </div>
    );
};

export default Person;
