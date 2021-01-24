import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
    const [loading, isLoading] = useState(true);
    const [error, isError] = useState(false);
    const [user, setUser] = useState('Default User');

    useEffect(() => {
        fetch(url)
            .then((resp) => {
                if (resp.status >= 200 && resp.status <= 299)
                    return resp.json();
                else {
                    isLoading(false);
                    isError(true);
                    throw new Error(resp.statusText);
                }
            })
            .then((user) => {
                const { login } = user;
                setUser(login);
                isLoading(false);
            })
            .catch((error) => console.log(error));
    });

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error...</h2>;
    return <h2>{user}</h2>;
};

export default MultipleReturns;
