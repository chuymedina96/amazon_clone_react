import React, {Component} from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import { useStateValue} from "./StateProvider"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header">
            <Link to ="/">
                <img
                    className="header__logo"
                    src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png"
                />
            </Link>
            <div className ="header__search">
                <input 
                    className="header__searchInput"
                    type="text" />
                    <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span 
                        className='header__optionLineOne'>
                            Hello Sign in
                    </span>
                    <span 
                        className='header__optionLineTwo'>
                            Accounts and Lists
                    </span>
                </div>

                <div className="header__option">
                    <span 
                        className='header__optionLineOne'>
                            returns
                    </span>
               
                    <span 
                        className='header__optionLineTwo'>
                            & Orders
                    </span>

                </div>

                <div className="header__option">
               
                    <span 
                        className='header__optionLineTwo'>
                            Try Prime
                    </span>

                </div>

                <div className="header__option">
                    <Link to="/checkout">
                        <div className="header__optionsBasket">
                            <span classNam="header__optionLineTwo">
                                <ShoppingCartIcon />{basket.length}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;