import React, { useState, useEffect } from 'react';

const ShowHide = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <button className='btn' onClick={() => setShow(!show)}>
                Show/Hide
            </button>
            {show && <Show />}
        </>
    );
};

const Show = () => {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    const checkHeight = () => {
        setHeight(window.innerHeight);
    };
    const checkWidth = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', checkHeight);
        return () => {
            window.removeEventListener('resize', checkHeight);
        };
    });
    useEffect(() => {
        window.addEventListener('resize', checkWidth);
        return () => {
            window.removeEventListener('resize', checkWidth);
        };
    });
    return (
        <div>
            <h2>Window</h2>
            <h3>Height = {height} px</h3>
            <h3>width = {width} px</h3>
        </div>
    );
};

export default ShowHide;
