import logo from 'images/logo.png';
import user from 'images/user.png';
import { Link } from 'react-router-dom';


import {
    Conteiner,
    Avatar,
  Navigate,
  Title,
  HeaderBgr,
  Logo
} from './Header.styled';


export const Header = () => {
    return (
    <>
      <HeaderBgr>
        <Conteiner >
                    <Logo src={logo} alt="logo" />
                   <Link to="/">Back</Link>  
            <Navigate>
            <Avatar src={user} alt="user" >
              </Avatar>
              <Title>User</Title>
            </Navigate>
        </Conteiner>
      </HeaderBgr>
      
    </>
  );
};

