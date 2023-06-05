import { NavLink } from 'react-router-dom';
import { Header, Footer } from '../../components/User/User.styled';

import React from 'react';

export const Home = () => {
    return (
        <div>
            <div>
                <Header />
                <NavLink to="/tweets">Tweets</NavLink>
            </div>
            <span>
                Welcome to the TweetsApp!!
            </span>
            <Footer>
                <p >Feel free to contact <a  href="tel:+610383766284">+61 (0)
                    383 766 284</a>
                </p></Footer>
        </div>);
 }
