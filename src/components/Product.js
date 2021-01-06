import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
console.log("Prod", this.props.product);
        return (
            <div className="card">
                <span className="card-title">{this.props.product.caption}</span>
                <img src={this.props.product.src} />
                <span className="contact">WPP 2494477571</span>
            </div>
        );

    }
}

export default Product;