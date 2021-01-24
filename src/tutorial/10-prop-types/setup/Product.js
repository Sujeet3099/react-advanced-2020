import React from 'react';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ name, price, id, image }) => {
    return (
        <article className='product'>
            <h4>{name}</h4>
            <img src={image ? image.url : defaultImage} alt='' />
            <p>Price: {price ? price : '--'}</p>
        </article>
    );
};

export default Product;
