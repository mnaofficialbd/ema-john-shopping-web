import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
// import "../../../public/products.json"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        for (const id in storedCart) {
            const addedProduct = products.find(product => (product.id) === id)
            console.log(addedProduct);
            /* if (Object.hasOwnProperty.call(object, id)) {
                const element = object[id];
                object
            } */
        }
        console.log(storedCart);
    }, [])

    const handleAddToCart = (product) => {
        //not allow this step: cart.push(product)
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
        // console.log(product);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;