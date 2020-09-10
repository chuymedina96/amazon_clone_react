import React from "react";
import './Product.css'
import { useStateValue} from "./StateProvider"

const Product = ({id,title, image, price, rating }) =>{
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating

            },
        });
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) =>(
                        <p>Star</p>
                    ))}
                </div>
            </div>
            <img 
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/M2RjMzI2ZGUt/M2RjMzI2ZGUt-NjkwMjZhZDEt-w379._SY304_CB406624432_.jpg"
            />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product;