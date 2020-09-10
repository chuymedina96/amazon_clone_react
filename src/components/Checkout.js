import React from "react";
import "./Checkout.css"
import Subtotal from "./Subtotal"


const Checkout = () =>{
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad" 
                    src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                />
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
                <h2>Subtotal</h2>
            </div>
        </div>
    )
}
export default Checkout;