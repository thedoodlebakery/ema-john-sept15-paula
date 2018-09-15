import React, { Component } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../utility/local-storage';
import fakeData from '../fakeData/index';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import giphy from '../images/giphy.gif';

class Review extends Component {
    constructor(){
        super();
        this.state ={
            cart: [],
            orderPlaced: false
        }
    }
    componentDidMount(){
       const storedCart = getDatabaseCart();
       const savedCart = [];
       for (let id in storedCart){
           const product = fakeData.find(prd => prd.id === id);
           product.quantity = storedCart[id];
           savedCart.push(product);
       }
       this.setState({
           cart:savedCart
       })
       console.log(storedCart);
    }

    handleRemoveItem = (product) => {
        const newCart = this.state.cart.filter(prd => prd.id !== product.id);
        console.log(product);
        removeFromDatabaseCart(product.id);
        this.setState({
            cart:newCart
        })
    }

    placeOrder = () =>{
        this.setState({
            orderPlaced: true,
            cart: []
        })
        processOrder();
    }
    render() {
        let happyImage;
        if (this.state.orderPlaced) {
            happyImage = <img src={giphy}></img>
        }
        return (
            
            <div className="shop">
                <div className="product-container">
                    {this.state.cart.map(prd => <Product product={prd} 
                    key={prd.id}
                    handleRemoveItem={this.handleRemoveItem}
                    isReview
                    ></Product>)}
                    {happyImage}
                </div>
                <div className="cart-container">
                    <Cart cart={this.state.cart}>
                        <button onClick={this.placeOrder}>Place Order</button>
                    </Cart>
                </div>
            </div>
        );
    }
}

export default Review;