import { UserList } from 'components/UserList/UserList.jsx';
import { Header, Footer } from '../../components/User/User.styled';

import React from 'react';

export const Tweets = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <UserList/>
            <Footer>
                <p >Feel free to contact <a  href="tel:+610383766284">+61 (0)
                    383 766 284</a>
                </p></Footer>
        </div>);
 }