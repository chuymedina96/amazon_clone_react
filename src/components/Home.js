import React from 'react';
import "./Home.css";
import Product from './Product'

const Home = () => {
    return (
        <div className ="home__container">
            <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w1500._CB406837584_.jpg"
            /> 

            <div className="home__row">
                <Product 
                    title='The Lean Startup 1' 
                    price={29.99} 
                    image='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/M2RjMzI2ZGUt/M2RjMzI2ZGUt-NjkwMjZhZDEt-w379._SY304_CB406624432_.jpg' 
                    rating={2}
                    
                />
                <Product 
                    title='The Lean Startup 2' 
                    price={19.99} 
                    image='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/M2RjMzI2ZGUt/M2RjMzI2ZGUt-NjkwMjZhZDEt-w379._SY304_CB406624432_.jpg' 
                    rating={4}
                    
                />
            </div>
            <div className="home__row">
                <Product 
                    title='The Lean Startup 3' 
                    price={23.99} 
                    image='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/M2RjMzI2ZGUt/M2RjMzI2ZGUt-NjkwMjZhZDEt-w379._SY304_CB406624432_.jpg' 
                    rating={5}
                    
                />
                <Product 
                    title='The Lean Startup 4'  
                    price={32.00} 
                    image='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/M2RjMzI2ZGUt/M2RjMzI2ZGUt-NjkwMjZhZDEt-w379._SY304_CB406624432_.jpg' 
                    rating={4}
                    
                />
                <Product 
                    title='The Lean Startup 5' 
                    price={4.99} 
                    image='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/M2RjMzI2ZGUt/M2RjMzI2ZGUt-NjkwMjZhZDEt-w379._SY304_CB406624432_.jpg' 
                    rating={4}
                    
                />
            </div>
            <div className="home__row">
                <Product 
                    title='The Lean Startup 6' 
                    price={54.99} 
                    image='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/M2RjMzI2ZGUt/M2RjMzI2ZGUt-NjkwMjZhZDEt-w379._SY304_CB406624432_.jpg' 
                    rating={5}
                    
                />
                <Product 
                    title='The Lean Startup 7' 
                    price={5.99} 
                    image='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/M2RjMzI2ZGUt/M2RjMzI2ZGUt-NjkwMjZhZDEt-w379._SY304_CB406624432_.jpg' 
                    rating={4}
                    
                />
            </div>
        </div>
    )
}

export default Home;