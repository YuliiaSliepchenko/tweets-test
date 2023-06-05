import logo from 'images/logo.png';
import user from 'images/logo.png';


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

