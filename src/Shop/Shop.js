import React, { Component } from 'react';
import fakeData from '../fakeData/index';
import Product from '../Product/Product.js';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from "../utility/local-storage";


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [], 
            cart: []
        }
    }
    handleAddToCart = (product) => {
        const newCart = [...this.state.cart, product];
        addToDatabaseCart(product.id, quantity);

        const quantity = newCart 
        .filter(prd => prd.id === product.id).length;
        addToDatabaseCart(product.id, quantity);
        this.setState({
            cart:newCart,
        });
    }

    
    componentDidMount() {
        const first10 = fakeData.slice(0, 10);
        console.log(first10);
        const storedCart = getDatabaseCart();
        const savedCart = [];
        for (let id in storedCart) {
            const product = fakeData.find(prd => prd.id === id);
            product.quantity = storedCart[id];
            savedCart.push(product);
        }
        console.log(storedCart);
   
        this.setState({
            products: first10, 
            cart: savedCart
        })
    }
    
    render() {
        return (
            <div className="shop">
            <div className="product-container">
                    <h1>Buy whatever you want</h1>
                    {
                        this.state.products.map(prd => <Product 
                            product={prd} 
                            addToCart={this.handleAddToCart}
                            key={prd.id}></Product>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={this.state.cart}></Cart>
            </div>
                
                
            </div>
        );
    }
}

export default Shop;