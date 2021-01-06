import React from 'react';
import './Grid.css';
import Product from './Product';

const Grid = (props) => {
    const products = props.products.map((product) => {
        return (
            <Product key={product.src} product={product} />
        );
    });

	return <div className="products-list">{products}</div>;    
}

export default Grid;